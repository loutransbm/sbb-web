import os
import cv2
import numpy as np
from PIL import Image

brain_dir = r"C:\Users\Admin\.gemini\antigravity-ide\brain\caf7b288-e5fe-4a97-b361-e1632043eb7c"
dest_dir = r"c:\Users\Admin\Downloads\New-folder-main (6)\sbb-web\sites\sbb\public\images\partners"

# 1. Process individual logos
files = [
    "media__1781015150751.jpg",
    "media__1781015150753.jpg",
    "media__1781015150761.jpg",
    "media__1781015278677.png",
    "media__1781015293408.png"
]
names = ["iee", "alliance", "ciee", "cetusa", "australian-internships"]

for f, name in zip(files, names):
    src = os.path.join(brain_dir, f)
    dst = os.path.join(dest_dir, name + ".png")
    img = Image.open(src).convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    img.save(dst, "PNG")

# 2. Process grid image
grid_img_path = os.path.join(brain_dir, "media__1781015407796.png")
grid = cv2.imread(grid_img_path)
gray = cv2.cvtColor(grid, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)

# Dilate to merge disconnected text parts
kernel = np.ones((25, 25), np.uint8)
dilated = cv2.dilate(thresh, kernel, iterations=2)
contours, _ = cv2.findContours(dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

bboxes = [cv2.boundingRect(c) for c in contours]
bboxes = [b for b in bboxes if b[2] > 50 and b[3] > 30]

hotel_names = [
    "marriott", "hilton", "waldorf", "omni", "westin", 
    "hyatt", "st-regis", "renaissance", "sonesta", "ritz-carlton", "marriott-vacation"
]

for i, b in enumerate(bboxes):
    x, y, w, h = b
    px, py = 10, 10
    x1, y1 = max(0, x-px), max(0, y-py)
    x2, y2 = min(grid.shape[1], x+w+px), min(grid.shape[0], y+h+py)
    
    roi = grid[y1:y2, x1:x2]
    name = hotel_names[i] if i < len(hotel_names) else f"hotel_{i}"
    dst = os.path.join(dest_dir, f"{name}.png")
    
    rgba = cv2.cvtColor(roi, cv2.COLOR_BGR2BGRA)
    white_pixels = np.where((rgba[:, :, 0] >= 235) & (rgba[:, :, 1] >= 235) & (rgba[:, :, 2] >= 235))
    rgba[white_pixels] = [255, 255, 255, 0]
    cv2.imwrite(dst, rgba)

print(f"Processed {len(files)} individual logos and {len(bboxes)} grid logos.")

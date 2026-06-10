const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function main() {
    const inputPath = path.join(__dirname, 'sites/sbb/public/grp-3d-globe.jpg');
    const outputPath = path.join(__dirname, 'sites/sbb/public/grp-3d-globe-nobg.png');
    
    // Read reference image to get target dimensions
    const refPath = path.join(__dirname, 'sites/sbb/public/career-3d-nobg-v2.png');
    const refImg = await Jimp.read(refPath);
    console.log(`Reference image: ${refImg.bitmap.width}x${refImg.bitmap.height}`);
    
    let img = await Jimp.read(inputPath);
    console.log(`Source image: ${img.bitmap.width}x${img.bitmap.height}`);
    
    // Remove black background - make dark pixels transparent
    // The image has a solid black background with metallic/orange subject
    const threshold = 30; // pixels darker than this become transparent
    
    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];
        
        // Calculate brightness
        let brightness = (r + g + b) / 3;
        
        if (brightness < threshold) {
            // Pure black - fully transparent
            this.bitmap.data[idx + 3] = 0;
        } else if (brightness < threshold + 25) {
            // Near-black - gradual fade for smooth edges
            let alpha = Math.round(((brightness - threshold) / 25) * 255);
            this.bitmap.data[idx + 3] = Math.min(alpha, this.bitmap.data[idx + 3]);
        }
    });
    
    // Auto-crop transparent pixels
    img = img.autocrop();
    console.log(`After crop: ${img.bitmap.width}x${img.bitmap.height}`);
    
    // Resize to match reference image dimensions (contain mode)
    const targetSize = Math.max(refImg.bitmap.width, refImg.bitmap.height);
    
    // Scale to fit within the reference dimensions
    const scale = Math.min(targetSize / img.bitmap.width, targetSize / img.bitmap.height);
    const newW = Math.round(img.bitmap.width * scale);
    const newH = Math.round(img.bitmap.height * scale);
    
    img = img.resize({ w: newW, h: newH });
    console.log(`Final size: ${newW}x${newH}`);
    
    await img.write(outputPath);
    console.log(`Saved to ${outputPath}`);
}

main().catch(console.error);

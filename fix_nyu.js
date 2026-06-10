const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function main() {
    const filePath = path.join(__dirname, 'sites/sbb/public/images/partners/nyu.png');
    let img = await Jimp.read(filePath);
    
    // Find top left pixel
    let color = img.getPixelColor(0, 0);
    let bgR = (color >> 24) & 255;
    let bgG = (color >> 16) & 255;
    let bgB = (color >> 8) & 255;
    let bgA = color & 255;
    
    console.log(`Original top-left pixel: rgba(${bgR}, ${bgG}, ${bgB}, ${bgA})`);

    // If it's already transparent, we probably don't need to do anything!
    if (bgA === 0) {
        console.log("Image is already transparent! No background removal needed.");
        return;
    }

    let isWhiteBg = (bgR > 230 && bgG > 230 && bgB > 230) && bgA > 0;
    
    let transparentCount = 0;
    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];
        let a = this.bitmap.data[idx + 3];
        
        if (a > 0) {
            let isBgColorMatch = Math.abs(r - bgR) < 20 && Math.abs(g - bgG) < 20 && Math.abs(b - bgB) < 20;
            
            // Only remove white if the background is actually white!
            if (isBgColorMatch) {
                this.bitmap.data[idx + 3] = 0;
                transparentCount++;
            }
        }
    });
    
    await img.write(filePath);
    console.log(`Processed nyu.png. Made ${transparentCount} pixels transparent. Bg: rgb(${bgR},${bgG},${bgB})`);
}

main().catch(console.error);

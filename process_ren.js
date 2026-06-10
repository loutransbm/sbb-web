const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function main() {
    const filePath = path.join(__dirname, 'sites/sbb/public/images/partners/renaissance.png');
    let img = await Jimp.read(filePath);
    
    let transparentCount = 0;
    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];
        
        // Very aggressive white background removal
        if (r > 200 && g > 200 && b > 200) {
            this.bitmap.data[idx + 3] = 0; // alpha = 0
            transparentCount++;
        }
    });
    
    await img.write(filePath);
    console.log(`Processed renaissance.png. Made ${transparentCount} pixels transparent.`);
}

main().catch(console.error);

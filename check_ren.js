const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function main() {
    const filePath = path.join(__dirname, 'sites/sbb/public/images/partners/renaissance.png');
    let img = await Jimp.read(filePath);
    
    let whiteCount = 0;
    img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
        let r = this.bitmap.data[idx + 0];
        let g = this.bitmap.data[idx + 1];
        let b = this.bitmap.data[idx + 2];
        let a = this.bitmap.data[idx + 3];
        
        if (a > 0 && r > 200 && g > 200 && b > 200) {
            whiteCount++;
        }
    });
    
    console.log(`There are ${whiteCount} non-transparent white pixels remaining.`);
}

main().catch(console.error);

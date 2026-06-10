const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function main() {
    const dir = path.join(__dirname, 'sites/sbb/public/images/partners');
    
    const files = ['melaleuca.png', 'safeway.png', 'walmart.png', 'wedgewood.png', 'nyu.png'];
    
    for(let f of files) {
        const filePath = path.join(dir, f);
        if(!fs.existsSync(filePath)) continue;
        
        let img = await Jimp.read(filePath);
        
        // Find top left pixel
        let color = img.getPixelColor(0, 0);
        let bgR = (color >> 24) & 255;
        let bgG = (color >> 16) & 255;
        let bgB = (color >> 8) & 255;
        let bgA = color & 255;
        
        // If it's transparent or very dark, assume white background
        if (bgA === 0 || (bgR < 50 && bgG < 50 && bgB < 50)) {
            bgR = 255; bgG = 255; bgB = 255;
        }

        let transparentCount = 0;
        img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
            let r = this.bitmap.data[idx + 0];
            let g = this.bitmap.data[idx + 1];
            let b = this.bitmap.data[idx + 2];
            let a = this.bitmap.data[idx + 3];
            
            if (a > 0) {
                // Remove anything close to the top-left color OR anything close to white
                if ((Math.abs(r - bgR) < 30 && Math.abs(g - bgG) < 30 && Math.abs(b - bgB) < 30) ||
                    (r > 200 && g > 200 && b > 200)) {
                    this.bitmap.data[idx + 3] = 0;
                    transparentCount++;
                }
            }
        });
        
        await img.write(filePath);
        console.log(`Processed ${f}. Made ${transparentCount} pixels transparent.`);
    }
}

main().catch(console.error);

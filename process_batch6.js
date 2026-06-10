const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function main() {
    const dir = path.join(__dirname, 'sites/sbb/public/images/partners');
    
    const files = ['sbenergy.png', 'berkeley.png', 'sel.png', 'reframe.png', 'oakridge.png'];
    
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
        
        let isWhiteBg = (bgR > 230 && bgG > 230 && bgB > 230) || bgA === 0;
        let isDarkBg = (bgR < 50 && bgG < 50 && bgB < 50) && bgA > 0;
        
        if (bgA === 0) {
            bgR = 255; bgG = 255; bgB = 255;
        }

        let transparentCount = 0;
        img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
            let r = this.bitmap.data[idx + 0];
            let g = this.bitmap.data[idx + 1];
            let b = this.bitmap.data[idx + 2];
            let a = this.bitmap.data[idx + 3];
            
            if (a > 0) {
                // If it's a perfect match with the background color (strict tolerance for dark backgrounds)
                let tol = isDarkBg ? 15 : 30; 
                let isBgColorMatch = Math.abs(r - bgR) < tol && Math.abs(g - bgG) < tol && Math.abs(b - bgB) < tol;
                
                // If it's a white background, also remove anything close to white
                let isWhiteAndShouldRemove = isWhiteBg && (r > 240 && g > 240 && b > 240);
                
                if (isBgColorMatch || isWhiteAndShouldRemove) {
                    this.bitmap.data[idx + 3] = 0;
                    transparentCount++;
                } else if (isBgColorMatch) {
                   // Some anti aliasing handling could be done, but we'll stick to basic removal
                }
            }
        });
        
        await img.write(filePath);
        console.log(`Processed ${f}. Made ${transparentCount} pixels transparent. Bg: rgb(${bgR},${bgG},${bgB})`);
    }
}

main().catch(console.error);

const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function main() {
    const dir = path.join(__dirname, 'sites/sbb/public/images/partners');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
    
    for (let f of files) {
        const filePath = path.join(dir, f);
        let img = await Jimp.read(filePath);
        let modified = false;
        
        img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
            let a = this.bitmap.data[idx + 3];
            
            // If the pixel is partially transparent (halo/smudge), remove it entirely
            if (a > 0 && a < 220) {
                this.bitmap.data[idx + 3] = 0;
                modified = true;
            } else if (a >= 220) {
                // Make the core logo fully opaque
                this.bitmap.data[idx + 3] = 255;
            }
            
            // Also, any pixel that is extremely close to white/gray (leftover background) inside the opaque area
            let r = this.bitmap.data[idx + 0];
            let g = this.bitmap.data[idx + 1];
            let b = this.bitmap.data[idx + 2];
            let a_new = this.bitmap.data[idx + 3];
            
            if (a_new === 255 && r > 200 && g > 200 && b > 200) {
                 // It's likely leftover white background, make it transparent
                 this.bitmap.data[idx + 3] = 0;
                 modified = true;
            }
        });
        
        if (modified) {
            await img.write(filePath);
            console.log(`Cleaned alpha for ${f}`);
        }
    }
}

main().catch(console.error);

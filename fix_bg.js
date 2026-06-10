const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function main() {
    const dir = path.join(__dirname, 'sites/sbb/public/images/partners');
    
    const files = [
        'marriott.png', 'hilton.png', 'waldorf.png', 'omni.png', 'westin.png',
        'hyatt.png', 'ritz-carlton.png', 'st-regis.png', 'renaissance.png', 'sonesta.png',
        'marriott-vacation.png', 'iee.png', 'alliance.png', 'ciee.png'
    ];
    
    for(let f of files) {
        const filePath = path.join(dir, f);
        if(!fs.existsSync(filePath)) continue;
        
        let img = await Jimp.read(filePath);
        
        let color = img.getPixelColor(0, 0);
        let bgR = (color >> 24) & 255;
        let bgG = (color >> 16) & 255;
        let bgB = (color >> 8) & 255;
        let bgA = color & 255;
        
        if (bgA === 0) {
            bgR = 255; bgG = 255; bgB = 255;
        }

        img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
            let r = this.bitmap.data[idx + 0];
            let g = this.bitmap.data[idx + 1];
            let b = this.bitmap.data[idx + 2];
            let a = this.bitmap.data[idx + 3];
            
            if (a > 0) {
                // Remove anything close to the top-left color OR anything close to white
                if ((Math.abs(r - bgR) < 40 && Math.abs(g - bgG) < 40 && Math.abs(b - bgB) < 40) ||
                    (r > 190 && g > 190 && b > 190)) {
                    this.bitmap.data[idx + 3] = 0;
                }
            }
        });
        
        await img.write(filePath);
        console.log(`Processed ${f}`);
    }
}

main().catch(console.error);

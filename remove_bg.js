const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function main() {
    const dir = path.join(__dirname, 'sites/sbb/public/images/partners');
    
    const files = ['cetusa.png', 'australian-internships.png'];
    for(let f of files) {
        const filePath = path.join(dir, f);
        if(!fs.existsSync(filePath)) continue;
        
        let img = await Jimp.read(filePath);
        img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
            let r = this.bitmap.data[idx + 0];
            let g = this.bitmap.data[idx + 1];
            let b = this.bitmap.data[idx + 2];
            // If pixel is white-ish background, make transparent
            if (r > 230 && g > 230 && b > 230) {
                this.bitmap.data[idx + 3] = 0;
            }
        });
        
        await img.write(filePath);
        console.log(`Processed ${f}`);
    }
}

main().catch(console.error);

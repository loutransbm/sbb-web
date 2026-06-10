const { Jimp } = require('jimp');
const path = require('path');

async function main() {
    const filePath = path.join(__dirname, 'sites/sbb/public/images/partners/renaissance.png');
    let img = await Jimp.read(filePath);
    
    // Resize it small enough to print in console
    img.resize({ w: 80, h: 40 });
    
    let ascii = '';
    for (let y = 0; y < img.bitmap.height; y++) {
        for (let x = 0; x < img.bitmap.width; x++) {
            let color = img.getPixelColor(x, y);
            let a = color & 255;
            if (a > 128) {
                ascii += '#';
            } else {
                ascii += ' ';
            }
        }
        ascii += '\n';
    }
    console.log(ascii);
}

main().catch(console.error);

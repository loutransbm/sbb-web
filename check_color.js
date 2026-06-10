const { Jimp } = require('jimp');

async function main() {
    let img = await Jimp.read("C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\caf7b288-e5fe-4a97-b361-e1632043eb7c\\media__1781016457930.png");
    
    function printPixel(x, y) {
        let color = img.getPixelColor(x, y);
        let r = (color >> 24) & 255;
        let g = (color >> 16) & 255;
        let b = (color >> 8) & 255;
        let a = color & 255;
        console.log(`Pixel(${x},${y}): R=${r} G=${g} B=${b} A=${a}`);
    }
    
    printPixel(0, 0);
    printPixel(5, 5);
    printPixel(10, 10);
    printPixel(50, 50);
}

main().catch(console.error);

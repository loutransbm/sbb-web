const { Jimp } = require('jimp');
const path = require('path');

async function slice() {
    const imgPath = path.join(__dirname, 'sites/sbb/public/images/partners/hotel-grid.png');
    const outDir = path.join(__dirname, 'sites/sbb/public/images/partners');
    
    let img = await Jimp.read(imgPath);
    const w = img.bitmap.width;
    const h = img.bitmap.height;
    
    const cols = 4;
    const rows = 3;
    const cellW = Math.floor(w / cols);
    const cellH = Math.floor(h / rows);
    
    let count = 1;
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            let clone = img.clone();
            // In Jimp v1, crop usually takes an object {x,y,w,h} or positional args.
            // Let's use positional as it is safe in Jimp 0.x and v1 is mostly compatible or we can just try positional
            // Actually, we are using the new @jimp/custom or whatever.
            try {
                clone.crop({x: c * cellW, y: r * cellH, w: cellW, h: cellH});
            } catch(e) {
                clone.crop(c * cellW, r * cellH, cellW, cellH);
            }
            
            try {
                // To safely remove transparent edges if autocrop works
                clone.autocrop();
            } catch(e) {}
            
            if (clone.bitmap.width > 20 && clone.bitmap.height > 20) {
                // Count non-empty blocks
                const outPath = path.join(outDir, `hotel_${count}.png`);
                try {
                    await clone.write(outPath);
                } catch(e) {
                    await clone.writeAsync(outPath);
                }
                count++;
            }
        }
    }
    console.log("Successfully sliced into " + (count - 1) + " images.");
}

slice().catch(console.error);

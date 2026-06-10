const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function main() {
    const brainDir = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\caf7b288-e5fe-4a97-b361-e1632043eb7c';
    const targetDir = 'c:\\Users\\Admin\\Downloads\\New-folder-main (6)\\sbb-web\\sites\\sbb\\public\\images\\partners';
    
    const mapping = {
        '1781015018399': 'denton.png',
        '1781015150753': 'miami.png',
        '1781015150761': 'walgreens.png',
        '1781015278677': 'graham.png',
        '1781017888450': 'melaleuca.png',
        '1781017992162': 'safeway.png',
        '1781018038405': 'walmart.png',
        '1781018064688': 'wedgewood.png',
        '1781018089095': 'nyu.png',
        '1781018208270': 'hajoca.png',
        '1781018274917': 'aaa.png',
        '1781018306485': 'musc.png',
        '1781018370137': 'notion.png',
        '1781018396287': 'minnesota.png',
        '1781018474199': 'deaconess.png',
        '1781018531264': 'metrohealth.png',
        '1781018566499': 'equinox.png',
        '1781018631386': 'evergreen.png',
        '1781018654442': 'cadwell.png',
        '1781018826417': 'sezzle.png',
        '1781018938394': 'argonne.png',
        '1781018995722': 'metox.png',
        '1781019071669': 'tree.png',
        '1781019105626': 'armada.png',
        '1781019218558': 'sbenergy.png',
        '1781019231203': 'berkeley.png',
        '1781019241874': 'sel.png',
        '1781019249634': 'reframe.png',
        '1781019257837': 'oakridge.png',
    };

    for(let id in mapping) {
        let sourceFile = path.join(brainDir, `media__${id}.png`);
        if(!fs.existsSync(sourceFile)) {
             sourceFile = path.join(brainDir, `media__${id}.jpg`);
        }
        if(!fs.existsSync(sourceFile)) continue;
        
        let destFile = path.join(targetDir, mapping[id]);
        
        let img = await Jimp.read(sourceFile);
        
        let tl = img.getPixelColor(0, 0);
        let tlR = (tl >> 24) & 255;
        let tlG = (tl >> 16) & 255;
        let tlB = (tl >> 8) & 255;
        let tlA = tl & 255;
        
        let isSolidWhiteBg = tlA > 250 && (tlR > 240 && tlG > 240 && tlB > 240);
        let isSolidDarkBg = tlA > 250 && (tlR < 40 && tlG < 40 && tlB < 40);

        if (isSolidWhiteBg) {
            img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
                let r = this.bitmap.data[idx + 0];
                let g = this.bitmap.data[idx + 1];
                let b = this.bitmap.data[idx + 2];
                let v = (r + g + b) / 3;
                let opacity = 255;
                if (v > 240) {
                    opacity = 255 - Math.min(255, (v - 240) * 17);
                }
                this.bitmap.data[idx + 0] = 255;
                this.bitmap.data[idx + 1] = 255;
                this.bitmap.data[idx + 2] = 255;
                this.bitmap.data[idx + 3] = opacity;
            });
            await img.write(destFile);
            console.log(`Tighter white bg removal for ${mapping[id]}`);
        } else if (isSolidDarkBg) {
            img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
                let r = this.bitmap.data[idx + 0];
                let g = this.bitmap.data[idx + 1];
                let b = this.bitmap.data[idx + 2];
                let v = (r + g + b) / 3;
                let opacity = 255;
                if (v < 25) {
                    opacity = Math.max(0, v * 10);
                }
                this.bitmap.data[idx + 0] = 255;
                this.bitmap.data[idx + 1] = 255;
                this.bitmap.data[idx + 2] = 255;
                this.bitmap.data[idx + 3] = opacity;
            });
            await img.write(destFile);
            console.log(`Tighter dark bg removal for ${mapping[id]}`);
        } else {
            // Already transparent or colored bg, just restore
            fs.copyFileSync(sourceFile, destFile);
            console.log(`Restored untouched ${mapping[id]}`);
        }
    }
}

main().catch(console.error);

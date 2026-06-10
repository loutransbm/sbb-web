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
        let bgR = (tl >> 24) & 255;
        let bgG = (tl >> 16) & 255;
        let bgB = (tl >> 8) & 255;
        let bgA = tl & 255;
        
        if (bgA < 250) {
            // ALREADY TRANSPARENT! Just copy untouched.
            fs.copyFileSync(sourceFile, destFile);
            console.log(`Copied transparent logo: ${mapping[id]}`);
            continue;
        }
        
        // SOLID BACKGROUND: Universal Distance-Based Extraction
        let maxD = 0;
        img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
            let r = this.bitmap.data[idx + 0];
            let g = this.bitmap.data[idx + 1];
            let b = this.bitmap.data[idx + 2];
            let dist = Math.sqrt(Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2));
            if (dist > maxD) maxD = dist;
        });
        
        // If the image is just a solid block of color, maxD will be 0. Avoid division by zero.
        if (maxD < 10) maxD = 10;
        
        img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
            let r = this.bitmap.data[idx + 0];
            let g = this.bitmap.data[idx + 1];
            let b = this.bitmap.data[idx + 2];
            let a = this.bitmap.data[idx + 3];
            
            if (a === 0) return;
            
            let dist = Math.sqrt(Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2));
            let opacity = 0;
            
            if (dist >= 10) {
                opacity = ((dist - 10) / (maxD - 10)) * 255;
                if (opacity > 255) opacity = 255;
            }
            
            // Apply opacity
            this.bitmap.data[idx + 0] = 255;
            this.bitmap.data[idx + 1] = 255;
            this.bitmap.data[idx + 2] = 255;
            this.bitmap.data[idx + 3] = opacity;
        });
        
        await img.write(destFile);
        console.log(`Universally extracted solid bg for ${mapping[id]}`);
    }
}

main().catch(console.error);

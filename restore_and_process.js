const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');
const { execSync } = require('child_process');

async function main() {
    console.log("Restoring original 14 logos...");
    // We will just extract them using powershell
    try {
        execSync(`powershell -Command "Expand-Archive -Path 'c:\\Users\\Admin\\Downloads\\New-folder-main (6).zip' -DestinationPath 'c:\\Users\\Admin\\Downloads\\temp_extract' -Force"`);
        const extractedDir = 'c:\\Users\\Admin\\Downloads\\temp_extract\\New-folder-main (6)\\sbb-web\\sites\\sbb\\public\\images\\partners';
        const targetDir = 'c:\\Users\\Admin\\Downloads\\New-folder-main (6)\\sbb-web\\sites\\sbb\\public\\images\\partners';
        
        let oldFiles = fs.readdirSync(extractedDir);
        for(let f of oldFiles) {
            fs.copyFileSync(path.join(extractedDir, f), path.join(targetDir, f));
        }
        console.log("Restored old files.");
    } catch(e) {
        console.error("Error extracting old files:", e.message);
    }

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

    console.log("Processing and copying 29 new files from brain...");
    for(let id in mapping) {
        let sourceFile = path.join(brainDir, `media__${id}.png`);
        if(!fs.existsSync(sourceFile)) {
             sourceFile = path.join(brainDir, `media__${id}.jpg`);
        }
        if(!fs.existsSync(sourceFile)) continue;
        
        let destFile = path.join(targetDir, mapping[id]);
        
        let img = await Jimp.read(sourceFile);
        
        // FLAWLESS ANTI-ALIASED WHITE LOGO ALGORITHM
        // 1. Get background color estimate (top left)
        let tl = img.getPixelColor(0, 0);
        let tlR = (tl >> 24) & 255;
        let tlG = (tl >> 16) & 255;
        let tlB = (tl >> 8) & 255;
        let tlA = tl & 255;
        
        let bgIsDark = tlA > 0 && (tlR < 100 && tlG < 100 && tlB < 100);
        
        img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
            let r = this.bitmap.data[idx + 0];
            let g = this.bitmap.data[idx + 1];
            let b = this.bitmap.data[idx + 2];
            let a = this.bitmap.data[idx + 3];
            
            if (a === 0) return; // already transparent
            
            let v = (r + g + b) / 3;
            let opacity = 0;
            
            if (bgIsDark) {
                // Background is dark, logo is light
                // Dark pixels become transparent, light pixels become white and opaque
                opacity = v;
            } else {
                // Background is light, logo is dark
                // Light pixels become transparent, dark pixels become white and opaque
                opacity = 255 - v;
            }
            
            // Adjust opacity by original alpha
            opacity = (opacity * a) / 255;
            
            // Set pixel to pure white with calculated opacity
            this.bitmap.data[idx + 0] = 255;
            this.bitmap.data[idx + 1] = 255;
            this.bitmap.data[idx + 2] = 255;
            this.bitmap.data[idx + 3] = opacity;
        });
        
        await img.write(destFile);
        console.log(`Perfected ${mapping[id]}`);
    }
    
    // Also perfect the 14 original ones
    let oldFilesList = ['marriott.png', 'hilton.png', 'waldorf.png', 'omni.png', 'westin.png', 'hyatt.png', 'ritz-carlton.png', 'st-regis.png', 'sonesta.png', 'marriott-vacation.png', 'iee.png', 'alliance.png', 'ciee.png', 'australian-internships.png'];
    for(let f of oldFilesList) {
        let filePath = path.join(targetDir, f);
        if(fs.existsSync(filePath)) {
            let img = await Jimp.read(filePath);
             let tl = img.getPixelColor(0, 0);
            let tlR = (tl >> 24) & 255;
            let tlG = (tl >> 16) & 255;
            let tlB = (tl >> 8) & 255;
            let tlA = tl & 255;
            
            let bgIsDark = tlA > 0 && (tlR < 100 && tlG < 100 && tlB < 100);
            
            img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
                let r = this.bitmap.data[idx + 0];
                let g = this.bitmap.data[idx + 1];
                let b = this.bitmap.data[idx + 2];
                let a = this.bitmap.data[idx + 3];
                if (a === 0) return;
                let v = (r + g + b) / 3;
                let opacity = bgIsDark ? v : 255 - v;
                opacity = (opacity * a) / 255;
                this.bitmap.data[idx + 0] = 255;
                this.bitmap.data[idx + 1] = 255;
                this.bitmap.data[idx + 2] = 255;
                this.bitmap.data[idx + 3] = opacity;
            });
            await img.write(filePath);
            console.log(`Perfected old file ${f}`);
        }
    }
}

main().catch(console.error);

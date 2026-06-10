const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\caf7b288-e5fe-4a97-b361-e1632043eb7c';
let files = fs.readdirSync(dir)
    .filter(f => f.startsWith('media__'))
    .map(f => {
        let stats = fs.statSync(path.join(dir, f));
        return { name: f, time: stats.mtime.getTime() };
    });

files.sort((a, b) => a.time - b.time);
for(let f of files) {
    console.log(`${f.name} - ${new Date(f.time).toISOString()}`);
}

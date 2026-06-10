const fs = require('fs');
const path = 'c:\\Users\\Admin\\Downloads\\New-folder-main (6)\\sbb-web\\sites\\sbb\\src\\pages\\index.astro';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/\s*<div class="partner-logo"><img src="\/images\/partners\/renaissance2\.png" alt="Renaissance" \/><\/div>/g, '');

fs.writeFileSync(path, content);
console.log("Removed Renaissance logo from HTML!");

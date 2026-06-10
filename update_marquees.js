const fs = require('fs');
const path = 'c:\\Users\\Admin\\Downloads\\New-folder-main (6)\\sbb-web\\sites\\sbb\\src\\pages\\index.astro';

const allLogos = [
  // old
  { file: 'marriott.png', alt: 'Marriott' },
  { file: 'hilton.png', alt: 'Hilton' },
  { file: 'waldorf.png', alt: 'Waldorf Astoria' },
  { file: 'omni.png', alt: 'Omni' },
  { file: 'westin.png', alt: 'Westin' },
  { file: 'hyatt.png', alt: 'Hyatt' },
  { file: 'ritz-carlton.png', alt: 'The Ritz-Carlton' },
  { file: 'st-regis.png', alt: 'St. Regis' },
  { file: 'sonesta.png', alt: 'Sonesta' },
  { file: 'marriott-vacation.png', alt: 'Marriott Vacation Club' },
  { file: 'iee.png', alt: 'IEE' },
  { file: 'alliance.png', alt: 'Alliance Abroad' },
  { file: 'ciee.png', alt: 'CIEE' },
  { file: 'australian-internships.png', alt: 'Australian Internships' },
  // new batch 1
  { file: 'miami.png', alt: 'Miami' },
  { file: 'walgreens.png', alt: 'Walgreens' },
  { file: 'graham.png', alt: 'Graham Packaging' },
  // new batch 2
  { file: 'safeway.png', alt: 'Safeway' },
  { file: 'walmart.png', alt: 'Walmart' },
  { file: 'wedgewood.png', alt: 'Wedgewood' },
  { file: 'nyu.png', alt: 'NYU' },
  // new batch 3
  { file: 'hajoca.png', alt: 'Hajoca' },
  { file: 'aaa.png', alt: 'AAA' },
  { file: 'musc.png', alt: 'MUSC' },
  { file: 'notion.png', alt: 'Notion' },
  { file: 'minnesota.png', alt: 'Minnesota' },
  // new batch 4
  { file: 'deaconess.png', alt: 'Deaconess' },
  { file: 'metrohealth.png', alt: 'MetroHealth' },
  { file: 'equinox.png', alt: 'Equinox' },
  { file: 'evergreen.png', alt: 'Evergreen' },
  { file: 'cadwell.png', alt: 'Cadwell' },
  // new batch 5
  { file: 'sezzle.png', alt: 'Sezzle' },
  { file: 'argonne.png', alt: 'Argonne' },
  { file: 'metox.png', alt: 'Metox' },
  { file: 'tree.png', alt: 'Tree Tech' },
  { file: 'armada.png', alt: 'Armada' },
  // new batch 6
  { file: 'sbenergy.png', alt: 'SB Energy' },
  { file: 'berkeley.png', alt: 'Berkeley Lab' },
  { file: 'sel.png', alt: 'SEL' },
  { file: 'reframe.png', alt: 'Reframe Data Services' },
  { file: 'oakridge.png', alt: 'Oak Ridge' }
];

// 41 logos in total. Divide by 3: 14, 14, 13
const track1 = allLogos.slice(0, 14);
const track2 = allLogos.slice(14, 28);
const track3 = allLogos.slice(28);

function generateTrackHtml(logos, isReverse) {
  const logosHtml = logos.map(l => `          <div class="partner-logo"><img src="/images/partners/${l.file}" alt="${l.alt}" /></div>`).join('\n');
  const trackClass = isReverse ? 'marquee-track marquee-track--reverse' : 'marquee-track';
  return `      <div class="${trackClass}">
        <div class="marquee-content">
${logosHtml}
        </div>
        <div class="marquee-content" aria-hidden="true">
${logosHtml}
        </div>
      </div>`;
}

const wrapperHtml = `    <div class="marquee-wrapper">
${generateTrackHtml(track1, false)}

${generateTrackHtml(track2, true)}

${generateTrackHtml(track3, false)}
    </div>`;

let content = fs.readFileSync(path, 'utf8');

const regex = /<div class="marquee-wrapper">[\s\S]*?<\/div>\s*<\/section>/;
const newSection = `${wrapperHtml}\n  </section>`;

content = content.replace(regex, newSection);

fs.writeFileSync(path, content);
console.log("Updated index.astro with 44 logos evenly distributed across 3 tracks.");

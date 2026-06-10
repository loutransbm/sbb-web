const fs = require('fs');
const readline = require('readline');

const transcriptPath = "C:/Users/Admin/.gemini/antigravity/brain/84b97828-5118-43f7-9389-bb2fc623832d/.system_generated/logs/transcript.jsonl";

async function findOldSizes() {
  const rl = readline.createInterface({
    input: fs.createReadStream(transcriptPath),
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('campaign-heading') && line.includes('replace_file_content')) {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const call of obj.tool_calls) {
          if (call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') {
            console.log(call.args.TargetContent);
            console.log("-------------------");
          }
        }
      }
    }
  }
}

findOldSizes();

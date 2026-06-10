const fs = require('fs');
const readline = require('readline');

const transcriptPath = "C:/Users/Admin/.gemini/antigravity/brain/84b97828-5118-43f7-9389-bb2fc623832d/.system_generated/logs/transcript.jsonl";

async function findOldSizes() {
  const rl = readline.createInterface({
    input: fs.createReadStream(transcriptPath),
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('replace_file_content') || line.includes('multi_replace_file_content')) {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const call of obj.tool_calls) {
          if (call.name === 'replace_file_content') {
            if (call.args.TargetContent && call.args.TargetContent.includes('.campaign-heading')) {
              console.log("REPLACE FILE CONTENT");
              console.log("Target:\n", call.args.TargetContent);
              console.log("Replacement:\n", call.args.ReplacementContent);
              console.log("-------------------");
            }
          }
          if (call.name === 'multi_replace_file_content') {
            for (const chunk of call.args.ReplacementChunks || []) {
              if (chunk.TargetContent && chunk.TargetContent.includes('.campaign-heading')) {
                console.log("MULTI REPLACE");
                console.log("Target:\n", chunk.TargetContent);
                console.log("Replacement:\n", chunk.ReplacementContent);
                console.log("-------------------");
              }
            }
          }
        }
      }
    }
  }
}

findOldSizes();

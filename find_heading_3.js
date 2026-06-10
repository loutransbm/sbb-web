const fs = require('fs');
const readline = require('readline');

const transcriptPath = "C:/Users/Admin/.gemini/antigravity/brain/84b97828-5118-43f7-9389-bb2fc623832d/.system_generated/logs/transcript.jsonl";

async function findOldHeadingBlock() {
  const rl = readline.createInterface({
    input: fs.createReadStream(transcriptPath),
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('replace_file_content') || line.includes('multi_replace_file_content')) {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const call of obj.tool_calls) {
          if (call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') {
            const argsStr = JSON.stringify(call.args);
            if (argsStr.includes('.campaign-heading')) {
              // we just want to see the target and replacement for campaign-heading
              console.log("Found match!");
              console.log("Target:\n", call.args.TargetContent);
              console.log("Replacement:\n", call.args.ReplacementContent);
              if (call.args.ReplacementChunks) {
                call.args.ReplacementChunks.forEach(chunk => {
                  if (chunk.TargetContent && chunk.TargetContent.includes('.campaign-heading')) {
                    console.log("Chunk Target:\n", chunk.TargetContent);
                    console.log("Chunk Replacement:\n", chunk.ReplacementContent);
                  }
                });
              }
            }
          }
        }
      }
    }
  }
}

findOldHeadingBlock();

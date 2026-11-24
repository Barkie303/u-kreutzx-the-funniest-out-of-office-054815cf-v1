// The Funniest Out-of-Office — entry for make.fun
// u-kreutzx-the-funniest-out-of-office-054815cf
// Writes one out-of-office auto-reply (1-140 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The reply: the out-of-office reply itself is out of office, so a temp
// is covering for it. The twist is that the absence has an absence —
// the auto-reply needed its own auto-reply, and the punch lands on the
// last words: a temp is covering for a machine — the inbox never stood a chance.
const LINE =
  "I'm away until Tuesday. My out-of-office reply is also out of office, so this is the temp covering for it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${outDir}/entry.txt`);

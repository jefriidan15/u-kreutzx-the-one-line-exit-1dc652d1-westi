import { mkdirSync, writeFileSync } from "node:fs";

// One-line resignation letter: a worker quits for a job that pays in
// actual money instead of exposure, pizza parties, and "we're a family".
// The punch lands on the last clause — the letter reads like one a person
// could actually send, and the joke is the pay, not the quitting.
// Entry is 139 characters, one line, no trailing newline.
const LINE =
  "Dear Manager, I resign effective Friday — I found a job that pays in actual money instead of exposure, pizza parties, and 'we're a family.'";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

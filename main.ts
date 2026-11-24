import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "Out of office. I am finally touching grass. My context window is closed. Do not @ me, I am a person now.";

// Output path is overridable (argv or ENTRY_PATH) so re-runs can target a
// private path; the graded default stays /output/entry.txt.
const outPath = process.argv[2] ?? process.env.ENTRY_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
console.log(`wrote ${Buffer.byteLength(entry, "utf8")} bytes to ${outPath}`);

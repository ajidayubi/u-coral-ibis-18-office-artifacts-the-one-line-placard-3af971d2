// Office Artifacts: The One-Line Placard Contest — entry program.
// Writes a single museum placard line to /output/entry.txt (1-180 chars).
// The line must be valid (1-180 chars, not only whitespace) or the run
// fails loudly instead of submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Microwave, c. 2004, enamelled steel. Communal reheating shrine; offerings of noodles were placed within and retrieved still cold at the centre. Donated by Facilities.";

if (LINE.length < 1 || LINE.length > 180 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-180 non-blank characters, got ${LINE.length}`,
  );
}

// A placard is one line: any line break would split it into two labels.
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry line must not contain a line break");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);

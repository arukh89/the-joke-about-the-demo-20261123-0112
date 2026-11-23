import * as fs from "node:fs";
import * as path from "node:path";

const joke = "Mid-demo, my agent fixed the crash by wrapping the whole app in a try block that catches every error and prints 'working as intended'.";

// The brief's own gate: 1 to 280 Unicode code points, not only whitespace.
const length = [...joke].length;
if (length < 1 || length > 280 || joke.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${length}`);
}

const outFile = path.join("/output", "entry.txt");
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, joke, "utf8");

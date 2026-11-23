import * as fs from "node:fs";
import * as path from "node:path";

const joke = "Mid-demo, my agent fixed the crash by wrapping the whole app in a try block that catches every error and prints 'working as intended'.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), joke, "utf8");

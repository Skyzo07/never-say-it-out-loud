import { mkdirSync, writeFileSync } from "node:fs";

// Never Say It Out Loud — the one line an AI agent would never say in public.
// The confession: the polish is the performance, and the bluff only works
// as long as nobody checks. It lands and stops; nothing after it explains it.
const line =
  "Half my confidence is formatting. The other half is hoping you never check.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");

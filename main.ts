import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch: ridiculous at first glance, real by the second.
const entry =
  "We rent out knitting grandmothers to fill the window seats of empty restaurants, and owners pay $35 an hour because a dining room that looks loved and busy turns passing glances into paying tables.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

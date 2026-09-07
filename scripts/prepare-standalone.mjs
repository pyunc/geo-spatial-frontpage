import { cpSync, existsSync, mkdirSync } from "node:fs";

const standaloneNextDir = ".next/standalone/.next";

if (!existsSync(".next/standalone")) {
  throw new Error("Missing .next/standalone. Run next build before preparing standalone assets.");
}

mkdirSync(standaloneNextDir, { recursive: true });
cpSync("public", ".next/standalone/public", { recursive: true, force: true });
cpSync(".next/static", `${standaloneNextDir}/static`, { recursive: true, force: true });

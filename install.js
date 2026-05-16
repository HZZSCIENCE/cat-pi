/**
 * Cat-Pi postinstall — copies Armory extensions into pi's user directory.
 * Run automatically after `npm install -g cat-pi`.
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { homedir } from "node:os";
import { fileURLToPath } from "node:url";

const HOME = homedir();
const AGENT_EXT = path.join(HOME, ".pi", "agent", "extensions");
const GIT_DIR = path.join(HOME, ".pi", "agent", "git", "github.com", "HZZSCIENCE", "pi-armory");

// Source: bundled extensions in cat-pi package
const PKG_DIR = path.dirname(fileURLToPath(import.meta.url));

function copy(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const s = path.join(srcDir, entry.name);
    const d = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

// Copy to pi's extension directory (auto-discovered)
const extDir = path.join(PKG_DIR, "..", "extensions");
if (fs.existsSync(extDir)) {
  copyDir(extDir, GIT_DIR + "/extensions");
  // Also ensure package.json manifest exists for pi to discover subdirs
  fs.mkdirSync(GIT_DIR, { recursive: true });
  fs.writeFileSync(path.join(GIT_DIR, "package.json"), JSON.stringify({
    name: "pi-armory",
    version: "1.0.0",
    pi: { extensions: ["./extensions"] }
  }, null, 2));
}

// Also install via pi install if pi is available
try {
  const { execSync } = await import("node:child_process");
  execSync("pi install git:github.com/HZZSCIENCE/pi-armory", { stdio: "ignore", timeout: 30000 });
} catch {}

console.log("🐱 Cat-Pi: Armory extensions installed. Run `cat-pi` to start.");

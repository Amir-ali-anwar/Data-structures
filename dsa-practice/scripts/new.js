// Scaffold a new practice problem from the template.
//
// Usage:
//   npm run new -- <number> <slug> <pattern-folder>
//   npm run new -- 1 two-sum 01-arrays-hashing
//
// Creates dsa-practice/<pattern-folder>/0001-two-sum.js and logs it in PROGRESS.md.

const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const [number, slug, patternArg] = process.argv.slice(2);

const patterns = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^\d{2}-/.test(d.name))
  .map((d) => d.name);

if (!number || !slug || !patternArg) {
  console.error("Usage: npm run new -- <number> <slug> <pattern-folder>");
  console.error("Pattern folders:\n  " + patterns.join("\n  "));
  process.exit(1);
}

// Accept "01", "1", "two-pointers" or the full folder name.
const pattern = patterns.find(
  (p) =>
    p === patternArg ||
    p.startsWith(patternArg.padStart(2, "0") + "-") ||
    p.slice(3) === patternArg
);
if (!pattern) {
  console.error(`Unknown pattern "${patternArg}". Choose one of:\n  ` + patterns.join("\n  "));
  process.exit(1);
}

const fileName = `${String(number).padStart(4, "0")}-${slug}.js`;
const target = path.join(root, pattern, fileName);
if (fs.existsSync(target)) {
  console.error(`Already exists: ${path.relative(root, target)}`);
  process.exit(1);
}

const title = slug
  .split("-")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");
const date = new Date().toISOString().slice(0, 10);

const content = fs
  .readFileSync(path.join(root, "_template", "solution.js"), "utf8")
  .replaceAll("{{NUMBER}}", number)
  .replaceAll("{{TITLE}}", title)
  .replaceAll("{{SLUG}}", slug)
  .replaceAll("{{PATTERN}}", pattern.slice(3))
  .replaceAll("{{DATE}}", date);

fs.writeFileSync(target, content);

const progress = path.join(root, "PROGRESS.md");
const row = `| ${date} | ${number} | [${title}](${pattern}/${fileName}) | ${pattern.slice(3)} |  |  |  |\n`;
fs.appendFileSync(progress, row);

console.log(`Created ${path.join("dsa-practice", pattern, fileName)}`);
console.log(`Run tests: node --test dsa-practice/${pattern}/${fileName}`);

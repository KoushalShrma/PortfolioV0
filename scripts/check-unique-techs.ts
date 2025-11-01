import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, '../src/lib/data.tsx');
const src = fs.readFileSync(filePath, 'utf8');

function extractArrayAt(pos: number) {
  // find first '[' after pos
  const start = src.indexOf('[', pos);
  if (start === -1) return null;
  let i = start;
  let depth = 0;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  return null;
}

function parseStringsFromArray(text: string) {
  // Use [\s\S] instead of dotAll to support older JS targets
  const re = /(['"])([\s\S]*?)\1/g;
  const out: string[] = [];
  let m;
  while ((m = re.exec(text))) {
    out.push(m[2]);
  }
  return out;
}

function findContextBefore(pos: number) {
  // look back up to 300 chars for title/company
  const slice = src.slice(Math.max(0, pos - 300), pos);
  const titleMatch = /title\s*:\s*['\"]([^'\"]+)['\"]/m.exec(slice);
  const companyMatch = /company\s*:\s*['\"]([^'\"]+)['\"]/m.exec(slice);
  return titleMatch?.[1] || companyMatch?.[1] || 'unknown';
}

function findAllTechnologies() {
  const results: {context: string; techs: string[]}[] = [];
  const re = /technologies\s*:\s*\[/g;
  let m;
  while ((m = re.exec(src))) {
    const arrText = extractArrayAt(m.index + m[0].length - 1);
    if (!arrText) continue;
    const techs = parseStringsFromArray(arrText).map((t) => t.trim());
    const context = findContextBefore(m.index);
    results.push({ context, techs });
  }
  return results;
}

function findDuplicates(arr: string[]) {
  const seen = new Set<string>();
  const dups = new Set<string>();
  for (const v of arr) {
    if (seen.has(v)) dups.add(v);
    else seen.add(v);
  }
  return Array.from(dups);
}

const techGroups = findAllTechnologies();
let ok = true;
for (const g of techGroups) {
  const dups = findDuplicates(g.techs);
  if (dups.length) {
    ok = false;
    console.error(`Duplicates in item (${g.context}): ${dups.join(', ')}`);
  }
}

if (ok) {
  console.log('PASS — no duplicate technology entries found in data.tsx');
  process.exitCode = 0;
} else {
  console.error('FAIL — duplicate technologies found (see above)');
  process.exitCode = 2;
}

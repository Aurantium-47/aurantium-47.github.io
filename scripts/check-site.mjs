import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

// Check emitted routes and assets, including links inside rendered Markdown.
const root = resolve('dist');
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
}
let checked = 0;
const failures = [];
for (const file of files(root).filter(path => path.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const url = match[1];
    if (/^(?:https?:|data:|mailto:|tel:|#|\/\/)/.test(url)) continue;
    const path = decodeURIComponent(url.split(/[?#]/)[0]);
    if (!path) continue;
    const target = path.startsWith('/') ? join(root, path) : resolve(dirname(file), path);
    const exists = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    if (!exists) failures.push(`${file.replace(root, '')} → ${url}`);
    checked++;
  }
}
for (const route of ['index.html', 'ai/index.html', 'notes/index.html', 'photos/index.html', 'about/index.html', 'resume/index.html', 'inspiration/index.html', '404.html', 'rss.xml', 'sitemap-index.xml', 'lab/emergence/index.html']) {
  if (!existsSync(join(root, route))) failures.push(`Missing route: ${route}`);
}
if (existsSync(join(root, 'ai/wechat-publishing/index.html'))) failures.push('A draft project was published.');
if (readFileSync(join(root, 'rss.xml'), 'utf8').includes('wechat-publishing')) failures.push('A draft leaked into RSS.');
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`Verified ${checked} internal links/assets, required routes, and draft exclusion.`);

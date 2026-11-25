import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const pages = ['index.html', 'news/index.html', 'teaching/index.html', 'publication/index.html', '404.html'];
for (const page of pages) {
  const html = readFileSync(`dist/${page}`, 'utf8');
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<main id="main">/);
  assert.match(html, /rel="canonical"/);
  assert(!html.includes('PORTRAIT_DATA'));
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"#?]*)[^\"]*"/g)) {
    const path = `dist${url}${url.endsWith('/') ? 'index.html' : ''}`;
    assert(existsSync(path), `${page}: missing local target ${url}`);
  }
}
const home = readFileSync('dist/index.html', 'utf8');
const sections = ['about', 'news', 'pubs', 'teach'];
let previous = -1;
for (const id of sections) {
  const position = home.indexOf(`<section id="${id}">`);
  assert(position > previous, `Missing or misplaced homepage section: ${id}`);
  assert(home.includes(`href="#${id}"`), `Missing navigation for ${id}`);
  previous = position;
}
assert.equal((home.match(/class="paper"/g) || []).length, 3);
assert.equal((home.match(/class="update"/g) || []).length, 2);
assert.match(home, /Findings of ACL 2026/);
assert(!home.includes('Bad News') && !home.includes('firstname.lastname'));
assert.match(readFileSync('dist/teaching/index.html', 'utf8'), /Coming soon\./);
assert(!existsSync('dist/CNAME'));
assert(!existsSync('dist/publication/conference-paper'));
assert(existsSync('dist/publication/emnlp2023_vechr/index.html'));
console.log('Passed: content, navigation, local assets, metadata, and preserved publication route.');

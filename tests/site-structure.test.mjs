import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { resolve } from 'node:path';
import { withBase } from '../src/lib/urls.js';

const root = resolve(import.meta.dirname, '..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');

test('provides all primary pages and sample content', () => {
  for (const path of [
    'src/pages/index.astro',
    'src/pages/projects/index.astro',
    'src/pages/blog/index.astro',
    'src/pages/about.astro',
    'src/content/blog/first-post.md',
    'src/content/projects/aurora-notes.md',
  ]) {
    assert.equal(existsSync(resolve(root, path)), true, `${path} should exist`);
  }
});

test('defines blog and project content collections', () => {
  const contentConfig = read('src/content.config.ts');
  assert.match(contentConfig, /blog/);
  assert.match(contentConfig, /projects/);
  assert.match(contentConfig, /projectUrl/);
});

test('builds base-aware URLs with exactly one separator', () => {
  assert.equal(withBase('/personal-blog', 'projects/'), '/personal-blog/projects/');
  assert.equal(withBase('/personal-blog/', '/images/aurora.svg'), '/personal-blog/images/aurora.svg');
});

test('includes base-aware navigation and page metadata', () => {
  const layout = read('src/layouts/BaseLayout.astro');
  assert.match(layout, /BASE_URL/);
  assert.match(layout, /<title>/);
  assert.match(layout, /description/);
});

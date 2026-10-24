import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = resolve(projectRoot, 'src/content/pages');
const buildDir = resolve(projectRoot, 'build');
const pageSlugs = readdirSync(pagesDir)
	.filter((file) => file.endsWith('.md'))
	.map((file) => file.slice(0, -3))
	.filter((slug) => slug !== 'home')
	.sort();

const redirects = ['/home / 308', '/home/ / 308', ...pageSlugs.map((slug) => `/${slug} /${slug}/ 308`)];

mkdirSync(buildDir, { recursive: true });
writeFileSync(resolve(buildDir, '_redirects'), `${redirects.join('\n')}\n`, 'utf8');
console.log('Generated build/_redirects');

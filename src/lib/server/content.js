// src/lib/server/content.js
import fm from 'front-matter';
import { error } from '@sveltejs/kit';
import settings from '../../content/settings/site.json';

const pageFiles = import.meta.glob('/src/content/pages/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
});

export function getSettings() {
    return settings;
}

export function loadPage(slug) {
    const raw = pageFiles[`/src/content/pages/${slug}.md`];
    if (!raw) throw error(404, `Page "${slug}" not found`);
    const { attributes } = fm(raw);
    return attributes;
}

export function getAllPages() {
    return Object.entries(pageFiles).map(([path, raw]) => {
        const slug = path.split('/').pop().replace('.md', '');
        const { attributes } = fm(raw);
        return { slug, ...attributes };
    });
}
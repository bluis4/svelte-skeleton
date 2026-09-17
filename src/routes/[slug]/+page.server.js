import { loadPage, getAllPages } from '$lib/server/content.js';
import { redirect } from '@sveltejs/kit';

export const prerender = true;

export function load({ params }) {
    if (params.slug === 'home') redirect(308, '/');
    return { page: loadPage(params.slug) };
}

export function entries() {
    return getAllPages().map((p) => ({ slug: p.slug }));
}
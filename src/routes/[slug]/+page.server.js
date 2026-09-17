// src/routes/[slug]/+page.server.js
import { loadPage } from '$lib/server/content.js';

export function load({ params }) {
    return { page: loadPage(params.slug) };
}
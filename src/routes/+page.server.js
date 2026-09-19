// src/routes/+page.server.js
import { loadPage } from '$lib/server/content.js';

export function load({ url }) {
    return { page: loadPage('home'), canonical: url.origin + url.pathname };
}
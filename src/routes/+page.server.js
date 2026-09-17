// src/routes/+page.server.js
import { loadPage } from '$lib/server/content.js';

export function load() {
    return { page: loadPage('home') };
}
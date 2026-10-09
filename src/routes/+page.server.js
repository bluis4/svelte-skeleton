// src/routes/+page.server.js
import { loadPage } from '$lib/server/content.js';

export const prerender = true;

export function load({ url }) {
  return {
    page: loadPage('home'),
    canonical: url.origin + '/'
  };
}
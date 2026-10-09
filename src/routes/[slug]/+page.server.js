// src/routes/[slug]/+page.server.js
import { loadPage, getAllPages } from '$lib/server/content.js';
import { redirect } from '@sveltejs/kit';

export const prerender = true;

export function load({ params, url }) {
  if (params.slug === 'home') redirect(308, '/');

  const path = `/${params.slug}/`;

  return {
    page: loadPage(params.slug),
    canonical: url.origin + path
  };
}

export function entries() {
  return getAllPages()
    .filter((p) => p.slug !== 'home')
    .map((p) => ({ slug: p.slug }));
}
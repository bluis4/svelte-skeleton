import { getAllPages, getSettings } from '$lib/server/content.js';

export const prerender = true;

export function load() {
    const menuItems = getAllPages()
        .filter((p) => p.show_in_menu)
        .sort((a, b) => (a.menu_order ?? 99) - (b.menu_order ?? 99))
        .map((p) => ({
            title: p.title,
            slug: p.slug === 'home' ? '/' : `/${p.slug}`
        }));

    return { site: getSettings(), menuItems };
}
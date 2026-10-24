import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: true
        }),
        prerender: {
            origin: 'https://svelte-skeleton-cma.pages.dev',
            handleHttpError: ({ path, referrer, message }) => {
                if (path.startsWith('/services/') || path === '/contact' || path === '/contact/') {
                    console.warn(`Ignoring 404 for ${path} (linked from ${referrer ?? 'an unknown source'})`);
                    return;
                }
                throw new Error(message);
            }
        }
    }
};

export default config;

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
            handleHttpError: ({ path, referrers }) => {
                if (path.startsWith('/services/') || path === '/contact') {
                    console.warn(`Ignoring 404 for ${path} (linked from ${referrers.join(', ')})`);
                    return 'ignore';
                }
                throw new Error(`404 ${path} (linked from ${referrers.join(', ')})`);
            }
        }
    }
};

export default config;
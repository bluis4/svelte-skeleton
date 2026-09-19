<!-- src/routes/+layout.svelte -->
<script>
    import '$lib/assets/app.css';
    import Header from '$lib/components/layout/Header.svelte';
    import Footer from '$lib/components/layout/Footer.svelte';

    let { data, children } = $props();
</script>

<svelte:head>
    <title>{data.site.site_name} {data.site.brand_highlight}</title>
    <meta property="og:site_name" content="{data.site.site_name} {data.site.brand_highlight}" />
    <meta property="og:locale" content="en_US" />
</svelte:head>

<div data-theme={data.site.color_palette ?? 'dark'} class="flex min-h-screen flex-col bg-base-100 text-base-content">
    <Header site={data.site} menuItems={data.menuItems} />
    <main class="flex-1">{@render children()}</main>
    <Footer site={data.site} menuItems={data.menuItems} />
</div>
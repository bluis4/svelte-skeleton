<!-- src/lib/components/base/SeoHead.svelte -->
<script>
    let { title, description, canonical, site, type = 'website' } = $props();

    const brand = $derived(
        `${site?.site_name ?? ''} ${site?.brand_highlight ?? ''}`.trim()
    );

    const fullTitle = $derived(
        title && brand
            ? `${title} — ${brand}`
            : title || brand || 'Untitled'
    );

    const fullDescription = $derived(
        description?.trim() || site?.tagline || ''
    );
</script>

<svelte:head>
    <title>{fullTitle}</title>
    <meta name="description" content={fullDescription} />

    {#if canonical}
        <link rel="canonical" href={canonical} />
    {/if}

    <meta property="og:type" content={type} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={fullDescription} />

    {#if canonical}
        <meta property="og:url" content={canonical} />
    {/if}

    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
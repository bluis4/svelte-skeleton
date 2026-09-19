<!-- src/lib/components/base/SeoHead.svelte -->
<script>
    let { title, description, canonical, site, type = 'website' } = $props();

    const fullTitle = `${title} — ${site.site_name} ${site.brand_highlight}`;
    const fullDescription = description?.trim() || site.tagline;
</script>

<svelte:head>
    <title>{fullTitle}</title>
    <meta name="description" content={fullDescription} />
    {#if canonical}<link rel="canonical" href={canonical} />{/if}
    <meta property="og:type" content={type} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={fullDescription} />
    {#if canonical}<meta property="og:url" content={canonical} />{/if}
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
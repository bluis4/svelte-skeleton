<!-- src/routes/[slug]/+page.svelte -->
<script>
    import BlockRenderer from '$lib/components/BlockRenderer.svelte';
    import SeoHead from '$lib/components/base/SeoHead.svelte';
    let { data } = $props();
</script>

<SeoHead
    title={data.page.title}
    description={data.page.description}
    canonical={data.canonical}
    site={data.site}
/>

<BlockRenderer sections={data.page.sections ?? []} />
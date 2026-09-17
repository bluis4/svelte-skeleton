<!-- src/routes/[slug]/+page.svelte -->
<script>
    import BlockRenderer from '$lib/components/BlockRenderer.svelte';
    let { data } = $props();
</script>

<BlockRenderer sections={data.page.sections ?? []} />
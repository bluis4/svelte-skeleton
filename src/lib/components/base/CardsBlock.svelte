<!-- src/lib/components/base/CardsBlock.svelte -->
<script>
    import BlockRenderer from '../BlockRenderer.svelte';
    let { block } = $props();
</script>

<section class="py-16 px-6 max-w-6xl mx-auto">
    {#if block.title}<h2 class="text-3xl font-bold text-center mb-10">{block.title}</h2>{/if}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlockRenderer sections={block.children ?? []} />
    </div>
</section>
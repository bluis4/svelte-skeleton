<!-- src/lib/components/data-display/CardBlock.svelte -->
<script>
    import BlockRenderer from '../BlockRenderer.svelte';
    let { block } = $props();
</script>

<div class="aura">
    <div class="card bg-base-100 shadow-xl border border-base-200">
        {#if block.image}
            <figure><img src={block.image} alt={block.title ?? ''} class="h-48 w-full object-cover" loading="lazy" /></figure>
        {/if}
        <div class="card-body">
            <h3 class="card-title">{block.title}</h3>
            <BlockRenderer sections={block.children ?? []} />
        </div>
    </div>
</div>
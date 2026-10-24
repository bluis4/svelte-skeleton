<script>
    /** @type {{ block: { items?: string[]; alignment?: string } }} */
    let { block } = $props();

    const alignments = /** @type {Record<string, string>} */ ({
        bottom: 'stack-bottom', top: 'stack-top', start: 'stack-start', end: 'stack-end'
    });
    let alignmentClass = $derived(alignments[block.alignment ?? 'bottom'] ?? alignments.bottom);
    let items = $derived(block.items?.length ? block.items : ['Primary cloud region', 'Secondary cloud region', 'Recovery site']);
</script>

<div class="stack {alignmentClass} my-8 h-48 w-72" aria-label="Layered infrastructure regions">
    {#each items.slice(0, 4) as item, index}
        <div class="grid h-36 w-64 place-content-center rounded-box border border-base-300 bg-base-100 p-4 text-center shadow-xl">
            <span class="font-semibold">{item}</span>
        </div>
    {/each}
</div>

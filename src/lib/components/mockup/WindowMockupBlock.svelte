<script>
    /** @type {{ block: { content?: string; title?: string } }} */
    let { block } = $props();
</script>

<div class="mockup-window my-4 w-full border border-base-300 bg-base-100">
    <div class="grid min-h-40 place-content-center border-t border-base-300 p-6 text-center">
        {#if block.title}<h3 class="mb-2 font-bold">{block.title}</h3>{/if}
        <p>{block.content ?? 'Operations dashboard ready'}</p>
    </div>
</div>

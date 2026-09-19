<!-- src/lib/components/blocks/CtaBannerBlock.svelte -->
<script>
    let { block } = $props();
</script>

<section class="py-16 px-6">
    <div class="max-w-5xl mx-auto rounded-3xl bg-primary text-primary-content py-14 px-8 text-center">
        <h2 class="text-3xl font-extrabold mb-3">{block.headline}</h2>
        {#if block.text}<p class="mb-6 opacity-90">{block.text}</p>{/if}
        <a href={block.button_link} class="btn bg-base-100 btn-primary border-0 hover:bg-base-200">{block.button_text}</a>
    </div>
</section>
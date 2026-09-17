<!-- src/lib/components/blocks/HeroBlock.svelte -->
<script>
    let { block } = $props();
</script>

<section class="py-16 text-center bg-base-200 rounded-3xl my-6 px-6">
    {#if block.badge}<span class="badge badge-primary mb-4">{block.badge}</span>{/if}
    <h1 class="text-5xl font-extrabold mb-4">{block.title}</h1>
    <p class="max-w-xl mx-auto text-lg text-base-content/80 mb-6">{block.description}</p>
    {#if block.cta_text && block.cta_link}
        <a href={block.cta_link} class="btn btn-primary">{block.cta_text}</a>
    {/if}
</section>
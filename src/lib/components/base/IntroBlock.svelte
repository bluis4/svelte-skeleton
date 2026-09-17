<!-- src/lib/components/blocks/IntroBlock.svelte -->
<script>
    let { block } = $props();
</script>

<section class="py-16 px-6 max-w-6xl mx-auto">
    <div class="flex flex-col gap-10 items-center {block.image_position === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'}">
        <div class="md:w-1/2">
            <h2 class="text-3xl font-bold mb-4">{block.title}</h2>
            <p class="text-base-content/80 text-lg">{block.text}</p>
        </div>
        {#if block.image}
            <figure class="md:w-1/2 w-full">
                <img src={block.image} alt={block.title ?? ''} class="rounded-3xl w-full object-cover" loading="lazy" />
            </figure>
        {/if}
    </div>
</section>
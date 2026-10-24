<!-- src/lib/components/blocks/HeroBlock.svelte -->
<script>
    let { block } = $props();
</script>

<section class="hero my-6 min-h-64 rounded-box bg-base-200 px-6 py-12">
    <div class="hero-content text-center">
        <div class="max-w-2xl">
            {#if block.badge}<span class="badge badge-primary mb-4">{block.badge}</span>{/if}
            <h1 class="text-4xl font-extrabold md:text-5xl">{block.title}</h1>
            <p class="mx-auto mb-6 mt-4 max-w-xl text-lg text-base-content/80">{block.description}</p>
            {#if block.cta_text && block.cta_link}
                <a href={block.cta_link} class="btn btn-primary">{block.cta_text}</a>
            {/if}
        </div>
    </div>
</section>

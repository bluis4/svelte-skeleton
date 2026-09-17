<!-- src/lib/components/blocks/ImageBlock.svelte -->
<script>
    let { block } = $props();
</script>

<img src={block.src} alt={block.alt ?? ''} class="rounded-xl w-full object-cover" loading="lazy" />
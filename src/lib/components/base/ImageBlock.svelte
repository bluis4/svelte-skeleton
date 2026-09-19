<!-- src/lib/components/blocks/ImageBlock.svelte -->
<script>
    let { block } = $props();
</script>

<img src={block.src} alt={block.alt ?? ''} width="1600" height="900" class="aspect-video rounded-xl w-full object-cover" loading="lazy" />
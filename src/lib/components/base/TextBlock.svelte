<!-- src/lib/components/blocks/TextBlock.svelte -->
<script>
    let { block } = $props();
</script>

<p class="text-base-content/80">{block.content}</p>
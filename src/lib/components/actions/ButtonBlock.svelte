<!-- src/lib/components/blocks/ButtonBlock.svelte -->
<script>
    let { block } = $props();
</script>
<div class="flex self-start">
    <a href={block.link} class="btn btn-primary btn-sm">{block.text}</a>
</div>
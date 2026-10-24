<script>
    /** @type {{ block: { lines?: string[]; prefix?: string } }} */
    let { block } = $props();

    let lines = $derived(block.lines?.length ? block.lines : ['npm run deploy:production', 'Checking service health...', 'Deployment completed']);
</script>

<div class="mockup-code my-4 w-full">
    {#each lines as line, index}
        <pre data-prefix={index === 0 ? (block.prefix ?? '$') : '>'}><code>{line}</code></pre>
    {/each}
</div>

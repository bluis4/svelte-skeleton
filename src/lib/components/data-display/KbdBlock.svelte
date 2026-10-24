<script>
	let { block } = $props();
	let keys = $derived(Array.isArray(block.keys) ? block.keys : [block.key ?? 'Ctrl']);
</script>

<p class="my-6 flex flex-wrap items-center gap-2">
	<span>{block.instruction ?? 'Open the support console with'}</span>
	{#each keys as key, index (`${index}-${key}`)}
		{#if index > 0}<span aria-hidden="true">+</span>{/if}
		<kbd class="kbd">{key}</kbd>
	{/each}
</p>

<script>
	let { block } = $props();
	let items = $derived(block.items ?? ['Design', 'Deploy', 'Maintain']);
	let duration = $derived(Math.max(1000, Number(block.duration) || 10000));
</script>

<p class="my-6 text-2xl font-semibold">
	{block.prefix ?? 'We'}
	<span class="text-rotate text-primary" style={`--items: ${items.length}; --duration: ${duration}ms`} aria-label={items.join(', ')}>
		<span>{#each items as item, index (`${index}-${item}`)}<span>{item}</span>{/each}</span>
	</span>
	{block.suffix ?? 'your IT operations'}
</p>

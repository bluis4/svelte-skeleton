<script>
	let { block } = $props();

	/** @type {Record<string, string>} */
	const colors = {
		neutral: 'status-neutral', primary: 'status-primary', secondary: 'status-secondary', accent: 'status-accent',
		info: 'status-info', success: 'status-success', warning: 'status-warning', error: 'status-error'
	};
	/** @type {Record<string, string>} */
	const sizes = { xs: 'status-xs', sm: 'status-sm', md: 'status-md', lg: 'status-lg', xl: 'status-xl' };
	let colorClass = $derived(colors[block.color] ?? colors.success);
	let sizeClass = $derived(sizes[block.size] ?? sizes.md);
</script>

<p class="my-6 flex items-center gap-3">
	<span class="status {colorClass} {sizeClass}" aria-label={block.label ?? 'Service status'}></span>
	<span>{block.text ?? 'All systems operational'}</span>
</p>

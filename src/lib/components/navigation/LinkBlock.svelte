<script>
	let { block } = $props();

	/** @type {Record<string, string>} */
	const colors = {
		default: '', neutral: 'link-neutral', primary: 'link-primary', secondary: 'link-secondary',
		accent: 'link-accent', info: 'link-info', success: 'link-success', warning: 'link-warning', error: 'link-error'
	};
	let colorClass = $derived(colors[block.color] ?? '');
	let hoverClass = $derived(block.hover_only ? 'link-hover' : '');
</script>

<p class="my-6">
	{#if block.context}<span>{block.context} </span>{/if}
	<a class="link {colorClass} {hoverClass}" href={block.href ?? '#'}>{block.label ?? 'View service details'}</a>
	{#if block.suffix}<span> {block.suffix}</span>{/if}
</p>

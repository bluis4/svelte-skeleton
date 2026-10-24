<script>
	let { block } = $props();

	/** @type {Record<string, string>} */
	const sizes = { xs: 'dock-xs', sm: 'dock-sm', md: '', lg: 'dock-lg', xl: 'dock-xl' };
	let sizeClass = $derived(sizes[block.size] ?? sizes.md);
</script>

<div class="my-6 rounded-box border border-base-300 bg-base-200 p-2">
	<nav class="dock {sizeClass} !static" aria-label={block.label ?? 'Primary navigation'}>
		{#each block.items ?? [] as item, index (`${index}-${item.label}`)}
			<a href={item.href ?? '#'} class={item.active ? 'dock-active' : ''} aria-current={item.active ? 'page' : undefined}>
				{#if item.icon}<span class="text-lg" aria-hidden="true">{item.icon}</span>{/if}
				<span class="dock-label">{item.label}</span>
			</a>
		{/each}
	</nav>
</div>

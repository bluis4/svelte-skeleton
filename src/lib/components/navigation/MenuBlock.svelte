<script>
	let { block } = $props();

	/** @type {Record<string, string>} */
	const sizes = { xs: 'menu-xs', sm: 'menu-sm', md: 'menu-md', lg: 'menu-lg', xl: 'menu-xl' };
	let sizeClass = $derived(sizes[block.size] ?? sizes.md);
	let directionClass = $derived(block.orientation === 'horizontal' ? 'menu-horizontal' : 'menu-vertical');
</script>

<nav class="my-6" aria-label={block.label ?? 'Service menu'}>
	<ul class="menu {sizeClass} {directionClass} w-full max-w-xl rounded-box border border-base-300 bg-base-100 shadow-sm">
		{#if block.title}<li class="menu-title">{block.title}</li>{/if}
		{#each block.items ?? [] as item, index (`${index}-${item.label}`)}
			<li>
				<a href={item.href ?? '#'} class={item.active ? 'menu-active' : ''} aria-current={item.active ? 'page' : undefined}>{item.label}</a>
				{#if item.children?.length}
					<ul>
						{#each item.children as child, childIndex (`${index}-${childIndex}-${child.label}`)}
							<li><a href={child.href ?? '#'}>{child.label}</a></li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<script>
	let { block } = $props();
</script>

<nav class="navbar my-6 flex-wrap gap-2 rounded-box border border-base-300 bg-base-100 shadow-sm" aria-label={block.label ?? 'Main navigation'}>
	<div class="navbar-start min-w-40 flex-1">
		<a class="btn btn-ghost text-lg" href={block.brand_href ?? '/'}>{block.brand ?? 'Northstar IT'}</a>
	</div>
	<ul class="menu menu-horizontal order-3 w-full flex-nowrap overflow-x-auto px-1 md:order-none md:w-auto md:flex-1">
		{#each block.items ?? [] as item, index (`${index}-${item.label}`)}
			<li><a href={item.href ?? '#'} aria-current={item.active ? 'page' : undefined}>{item.label}</a></li>
		{/each}
	</ul>
	{#if block.cta_label}
		<div class="navbar-end flex-none"><a class="btn btn-primary btn-sm" href={block.cta_href ?? '#'}>{block.cta_label}</a></div>
	{/if}
</nav>

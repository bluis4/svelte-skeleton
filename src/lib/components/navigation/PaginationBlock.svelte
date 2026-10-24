<script>
	let { block } = $props();
	let current = $derived(Math.max(0, Number(block.current) || 0));
</script>

<nav class="my-6" aria-label={block.label ?? 'Pagination'}>
	<div class="join">
		{#if block.previous_href}<a class="btn join-item" href={block.previous_href} aria-label="Previous page">«</a>{/if}
		{#each block.pages ?? [] as page, index (`${index}-${page.label}`)}
			<a class="btn join-item {index === current ? 'btn-active' : ''}" href={page.href ?? '#'} aria-current={index === current ? 'page' : undefined}>{page.label}</a>
		{/each}
		{#if block.next_href}<a class="btn join-item" href={block.next_href} aria-label="Next page">»</a>{/if}
	</div>
</nav>

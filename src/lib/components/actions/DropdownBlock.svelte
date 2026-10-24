<script>
	/** @type {{ block: { label?: string; position?: string; items?: { label: string; href?: string }[] } }} */
	let { block } = $props();

	const positions = /** @type {Record<string, string>} */ ({
		start: 'dropdown-start',
		center: 'dropdown-center',
		end: 'dropdown-end'
	});

	let positionClass = $derived(positions[block.position ?? ''] || positions.end);
</script>

<details class={`dropdown ${positionClass} my-4`}>
	<summary class="btn btn-primary">{block.label || 'Service options'}</summary>
	<ul class="menu dropdown-content z-10 mt-2 w-56 rounded-box bg-base-100 p-2 shadow-xl">
		{#each block.items ?? [] as item (item.label)}
			<li><a href={item.href || '/about/'}>{item.label}</a></li>
		{/each}
	</ul>
</details>

<script>
	let { block } = $props();

	/** @type {Record<string, string>} */
	const orientations = { vertical: 'timeline-vertical', horizontal: 'timeline-horizontal' };
	let orientationClass = $derived(orientations[block.orientation] ?? orientations.vertical);
</script>

<ul class="timeline {orientationClass} my-6 w-full">
	{#each block.items ?? [] as item, index (`${index}-${item.title}`)}
		<li>
			{#if index > 0}<hr />{/if}
			<div class="timeline-start timeline-box">{item.date}</div>
			<div class="timeline-middle"><span class="status status-primary status-sm" aria-hidden="true"></span></div>
			<div class="timeline-end timeline-box">
				<h3 class="font-semibold">{item.title}</h3>
				<p class="mt-1 text-sm">{item.description}</p>
			</div>
			{#if index < (block.items?.length ?? 0) - 1}<hr />{/if}
		</li>
	{/each}
</ul>

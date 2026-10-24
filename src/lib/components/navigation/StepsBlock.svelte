<script>
	let { block } = $props();

	/** @type {Record<string, string>} */
	const orientations = { horizontal: 'steps-horizontal', vertical: 'steps-vertical' };
	let orientationClass = $derived(orientations[block.orientation] ?? orientations.horizontal);
	let current = $derived(Math.max(0, Number(block.current) || 0));
</script>

<ul class="steps {orientationClass} my-6 w-full">
	{#each block.items ?? [] as item, index (`${index}-${item.label}`)}
		<li class="step {index <= current ? 'step-primary' : ''}" data-content={index < current ? '✓' : String(index + 1)} aria-current={index === current ? 'step' : undefined}>
			<span>{item.label}</span>
			{#if item.description}<span class="mt-1 text-xs text-base-content/60">{item.description}</span>{/if}
		</li>
	{/each}
</ul>

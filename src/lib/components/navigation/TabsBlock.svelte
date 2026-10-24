<script>
	/** @type {{ block: { style?: string; tabs?: { label: string; content: string }[] } }} */
	let { block } = $props();
	const groupId = $props.id();

	const tabStyles = /** @type {Record<string, string>} */ ({
		boxed: 'tabs-box',
		lifted: 'tabs-lift'
	});

	let tabsClass = $derived(`tabs ${tabStyles[block.style ?? ''] || tabStyles.boxed}`);
</script>

<div role="tablist" class={tabsClass}>
	{#each block.tabs ?? [] as tab, index (`${groupId}-${index}`)}
		<input
			id={`${groupId}-${index}`}
			type="radio"
			name={groupId}
			class="tab"
			aria-label={tab.label}
			checked={index === 0}
		/>
		<div class="tab-content rounded-box border-base-300 bg-base-100 p-6">
			<p>{tab.content}</p>
		</div>
	{/each}
</div>

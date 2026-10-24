<script>
	/** @type {{ block: { label?: string; options?: { label: string; value: string }[] } }} */
	let { block } = $props();
	const groupName = $props.id();
</script>

<fieldset class="fieldset my-4 rounded-box border border-base-300 p-4">
	<legend class="fieldset-legend">{block.label || 'Preview site theme'}</legend>
	{#each block.options ?? [] as option, index (`${groupName}-${option.value}`)}
		<label class="flex cursor-pointer items-center gap-3 py-1">
			<input
				type="radio"
				name={groupName}
				class="radio radio-sm theme-controller"
				value={option.value}
				aria-label={option.label}
				checked={index === 0}
			/>
			<span>{option.label}</span>
		</label>
	{/each}
</fieldset>

<script>
	let { block } = $props();
	let groupName = $props.id();
</script>

<div class="my-6 space-y-2">
	{#each block.items ?? [] as item, index (`${groupName}-${index}`)}
		<details class="collapse collapse-arrow border border-base-300 bg-base-100" name={groupName} open={index === 0}>
			<summary class="collapse-title font-semibold">{item.title}</summary>
			<div class="collapse-content text-sm leading-relaxed">{item.content}</div>
		</details>
	{/each}
</div>

<script>
	let { block } = $props();
</script>

<div class="stats my-6 w-full border border-base-300 bg-base-100 shadow-sm">
	<div class="stat">
		{#if block.icon}
			<div class="stat-figure text-primary">{block.icon}</div>
		{/if}
		<div class="stat-title">{block.title}</div>
		<div class="stat-value">{block.value}</div>
		{#if block.description}
			<div class="stat-desc">{block.description}</div>
		{/if}
	</div>
</div>

<script>
	let { block } = $props();
</script>

<ul class="list my-6 w-full rounded-box border border-base-300 bg-base-100 shadow-sm">
	{#if block.title}<li class="p-4 pb-2 text-xs font-semibold uppercase tracking-wide opacity-60">{block.title}</li>{/if}
	{#each block.items ?? [] as item, index (`${index}-${item.title}`)}
		<li class="list-row items-center">
			<div class="text-2xl font-light tabular-nums opacity-40">{String(index + 1).padStart(2, '0')}</div>
			<div class="list-col-grow">
				<div class="font-medium">{item.title}</div>
				{#if item.description}<div class="text-xs opacity-60">{item.description}</div>{/if}
			</div>
			{#if item.status}<span class="badge badge-outline">{item.status}</span>{/if}
		</li>
	{/each}
</ul>

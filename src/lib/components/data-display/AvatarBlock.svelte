<script>
	let { block } = $props();

	/** @type {Record<string, string>} */
	const sizes = { xs: 'w-8', sm: 'w-10', md: 'w-14', lg: 'w-20' };
	/** @type {Record<string, string>} */
	const statuses = { online: 'avatar-online', offline: 'avatar-offline', none: '' };
	let sizeClass = $derived(sizes[block.size] ?? sizes.md);
	let statusClass = $derived(statuses[block.status] ?? '');
</script>

<div class="my-6 flex items-center gap-4">
	<div class="avatar {statusClass}">
		<div class="{sizeClass} rounded-full bg-neutral text-neutral-content">
			{#if block.image}
				<img src={block.image} alt={block.name ?? 'Team member'} width="80" height="80" loading="lazy" />
			{:else}
				<span aria-hidden="true">{block.initials ?? 'IT'}</span>
			{/if}
		</div>
	</div>
	{#if block.name}<span class="font-medium">{block.name}</span>{/if}
</div>

<script>
	let { block } = $props();
</script>

<div class="carousel carousel-center my-6 w-full gap-4 rounded-box bg-base-200 p-4" aria-label={block.label ?? 'Service highlights'}>
	{#each block.items ?? [] as item, index (`${index}-${item.title}`)}
		<article class="carousel-item w-64 max-w-[80vw]">
			<div class="card h-full w-full border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body">
					<span class="badge badge-primary badge-outline">{item.eyebrow ?? 'Service'}</span>
					<h3 class="card-title">{item.title}</h3>
					<p>{item.content}</p>
				</div>
			</div>
		</article>
	{/each}
</div>

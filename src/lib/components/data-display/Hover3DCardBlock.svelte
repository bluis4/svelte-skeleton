<script>
	let { block } = $props();
</script>

<div class="hover-3d my-8 max-w-lg">
	<article class="card image-full min-h-64 overflow-hidden border border-base-300 bg-neutral text-neutral-content shadow-xl">
		{#if block.image}<figure><img src={block.image} alt="" width="800" height="500" loading="lazy" /></figure>{/if}
		<div class="card-body justify-end">
			<span class="badge badge-secondary">{block.eyebrow ?? 'Infrastructure'}</span>
			<h3 class="card-title text-2xl">{block.title ?? 'A resilient cloud foundation'}</h3>
			<p>{block.content ?? 'Secure architecture designed for dependable growth.'}</p>
		</div>
	</article>
	<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div>

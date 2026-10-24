<script>
	let { block } = $props();
</script>

<figure class="hover-gallery my-6" aria-label={block.label ?? 'IT service gallery'}>
	{#each block.images ?? [] as image, index (`${index}-${image.src}`)}
		<img src={image.src} alt={image.alt ?? ''} width="640" height="420" loading="lazy" />
	{/each}
</figure>

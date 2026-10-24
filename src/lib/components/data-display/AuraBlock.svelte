<script>
	let { block } = $props();

	/** @type {Record<string, string>} */
	const styles = {
		default: '', dual: 'aura-dual', rainbow: 'aura-rainbow', holo: 'aura-holo',
		gold: 'aura-gold', silver: 'aura-silver', glow: 'aura-glow'
	};
	let styleClass = $derived(styles[block.style] ?? '');
</script>

<div class="aura {styleClass} my-8 rounded-2xl bg-base-100 p-8 text-center shadow-xl">
	<p class="text-sm font-semibold uppercase tracking-widest text-primary">{block.eyebrow ?? 'Managed IT'}</p>
	<h3 class="mt-2 text-2xl font-bold">{block.title ?? 'Reliable service, every day'}</h3>
	<p class="mt-2 text-base-content/70">{block.content ?? 'Cloud, endpoint, and network support from one operations team.'}</p>
</div>

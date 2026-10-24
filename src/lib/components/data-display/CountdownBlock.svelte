<script>
	let { block } = $props();
	let value = $derived(Math.min(999, Math.max(0, Number(block.value) || 0)));
</script>

<div class="my-6 flex flex-wrap items-center gap-3">
	<div class="countdown rounded-box bg-neutral px-4 py-3 text-3xl text-neutral-content" aria-live="polite" aria-label={block.label ?? `${value} ${block.unit ?? 'minutes'} remaining`}>
		<span style={`--value: ${value}; --digits: ${String(value).length}`} aria-hidden="true">{value}</span>
	</div>
	<div>
		<p class="font-semibold">{block.title ?? 'Response target'}</p>
		<p class="text-sm text-base-content/70">{block.unit ?? 'minutes'} remaining</p>
	</div>
</div>

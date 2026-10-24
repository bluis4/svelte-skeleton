<script>
	let { block } = $props();
</script>

<figure class="diff my-6 aspect-[16/7] w-full overflow-hidden rounded-box border border-base-300" aria-label={block.label ?? 'Before and after service comparison'}>
	<div class="diff-item-1 flex items-center justify-center bg-error/10 p-6 text-center">
		<div><p class="text-xs font-bold uppercase tracking-wider text-error">{block.before_label ?? 'Before'}</p><p class="mt-2 font-semibold">{block.before ?? 'Reactive support and unplanned downtime'}</p></div>
	</div>
	<div class="diff-item-2 flex items-center justify-center bg-success/10 p-6 text-center">
		<div><p class="text-xs font-bold uppercase tracking-wider text-success">{block.after_label ?? 'After'}</p><p class="mt-2 font-semibold">{block.after ?? 'Proactive monitoring and predictable operations'}</p></div>
	</div>
	<input type="range" min="0" max="100" value="50" class="diff-resizer" aria-label="Drag to compare the two service states" />
</figure>

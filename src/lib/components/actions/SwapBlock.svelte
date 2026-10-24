<script>
	/** @type {{ block: { on_text?: string; off_text?: string; style?: string; accessible_label?: string } }} */
	let { block } = $props();

	const styles = /** @type {Record<string, string>} */ ({
		none: '',
		rotate: 'swap-rotate',
		flip: 'swap-flip'
	});

	let swapClass = $derived(`swap ${styles[block.style ?? ''] || ''}`.trim());
</script>

<label class={`${swapClass} my-4 text-lg`}>
	<input type="checkbox" aria-label={block.accessible_label || 'Toggle service status'} />
	<span class="swap-on">{block.on_text || 'On-call coverage active'}</span>
	<span class="swap-off">{block.off_text || 'On-call coverage paused'}</span>
</label>

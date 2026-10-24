<script>
	/** @type {{ block: { label?: string; trigger?: string; actions?: { label: string; text: string; href?: string }[] } }} */
	let { block } = $props();
</script>

<div class="relative my-6 min-h-64 rounded-box border border-dashed border-base-300 bg-base-200/40">
	<p class="p-4 text-sm text-base-content/60">Focus or activate the floating action to reveal service shortcuts.</p>
	<div class="fab" style="position: absolute; right: 1rem; bottom: 1rem;">
		<div tabindex="0" role="button" aria-label={block.label || 'Open support actions'} class="btn btn-lg btn-circle btn-primary">
			{block.trigger || 'IT'}
		</div>
		{#each block.actions ?? [] as action (action.label)}
			<div>
				<span>{action.label}</span>
				<a class="btn btn-lg btn-circle" href={action.href || '/about/'} aria-label={action.label}>{action.text}</a>
			</div>
		{/each}
	</div>
</div>

<script>
	/** @type {{ block: { trigger?: string; title?: string; content?: string; close_label?: string } }} */
	let { block } = $props();
	const modalId = $props.id();
	let dialog = $state(/** @type {HTMLDialogElement | undefined} */ (undefined));
</script>

<div class="my-4">
	<button class="btn btn-primary" type="button" onclick={() => dialog?.showModal()}>
		{block.trigger || 'View support details'}
	</button>
	<dialog bind:this={dialog} class="modal" aria-labelledby={`${modalId}-title`}>
		<div class="modal-box">
			<h3 id={`${modalId}-title`} class="text-lg font-bold">{block.title || 'Support coverage'}</h3>
			<p class="py-4">{block.content}</p>
			<div class="modal-action">
				<form method="dialog"><button class="btn">{block.close_label || 'Close'}</button></form>
			</div>
		</div>
		<form method="dialog" class="modal-backdrop"><button aria-label="Close dialog">close</button></form>
	</dialog>
</div>

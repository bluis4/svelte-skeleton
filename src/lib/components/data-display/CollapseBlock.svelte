<script>
	let { block } = $props();

	/** @type {Record<string, string>} */
	const icons = { arrow: 'collapse-arrow', plus: 'collapse-plus', none: '' };
	let iconClass = $derived(icons[block.icon] ?? icons.arrow);
</script>

<details class="collapse {iconClass} my-6 border border-base-300 bg-base-100">
	<summary class="collapse-title font-semibold">{block.title ?? 'Service details'}</summary>
	<div class="collapse-content text-sm leading-relaxed">{block.content}</div>
</details>

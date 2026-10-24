<script>
	let { block } = $props();

	/** @type {Record<string, string>} */
	const placements = { start: 'chat-start', end: 'chat-end' };
</script>

<section class="my-6 rounded-box border border-base-300 bg-base-100 p-4" aria-label={block.label ?? 'Support conversation'}>
	{#each block.messages ?? [] as message, index (`${index}-${message.speaker}`)}
		<div class="chat {placements[message.placement] ?? placements.start}">
			<div class="chat-header">{message.speaker}<time class="ml-2 text-xs opacity-50">{message.time}</time></div>
			<div class="chat-bubble">{message.message}</div>
			{#if message.footer}<div class="chat-footer opacity-50">{message.footer}</div>{/if}
		</div>
	{/each}
</section>

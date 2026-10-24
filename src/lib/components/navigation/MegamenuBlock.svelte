<script>
	let { block } = $props();
	let groupId = $props.id();
</script>

<section class="my-6 rounded-box border border-base-300 bg-base-100 p-3" aria-label={block.label ?? 'Service navigation'}>
	<button class="btn btn-sm mb-2 sm:hidden" popovertarget={`${groupId}-menu`}>Open {block.label ?? 'services'}</button>
	<div id={`${groupId}-menu`} class="megamenu megamenu-wide max-sm:megamenu-vertical w-full border border-base-300 bg-base-100 p-2" popover="auto">
		<span class="megamenu-active"></span>
		{#each block.groups ?? [] as group, index (`${groupId}-${index}`)}
			{@const popoverId = `${groupId}-group-${index}`}
			<button popovertarget={popoverId}>{group.label}</button>
			<div id={popoverId} class="min-w-64 rounded-box border border-base-300 bg-base-100 p-3 shadow-lg" popover="auto">
				{#if group.description}<p class="mb-2 text-sm text-base-content/70">{group.description}</p>{/if}
				<ul class="menu menu-sm w-full">
					{#each group.links ?? [] as link, linkIndex (`${index}-${linkIndex}-${link.label}`)}
						<li><a href={link.href ?? '#'}>{link.label}</a></li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<script>
	let { block } = $props();
</script>

<nav aria-label="Breadcrumb" class="my-4">
	<div class="text-sm breadcrumbs">
		<ul>
			{#each block.links ?? [] as link, index (link.href + link.label)}
				<li>
					<a href={link.href || '#'} aria-current={index === (block.links?.length ?? 0) - 1 ? 'page' : undefined}>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

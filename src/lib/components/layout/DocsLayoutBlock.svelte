<script>
	import BlockRenderer from '../BlockRenderer.svelte';
	let { block } = $props();
</script>

<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[250px_1fr]">
	<aside class="md:sticky md:top-20 md:max-h-[calc(100vh-5rem)] md:overflow-y-auto">
		<nav aria-label="Component categories" class="rounded-box border border-base-300 bg-base-100 p-4">
			<h2 class="mb-3 text-sm font-bold uppercase tracking-wide text-base-content/60">Categories</h2>
			<ul class="menu menu-sm w-full p-0">
				{#each block.sidebar ?? [] as category (category.anchor)}
					<li>
						<a href={`#${category.anchor}`}>{category.label}</a>
						{#if category.links?.length}
							<ul>
								{#each category.links as component (component.anchor)}
									<li><a href={`#${component.anchor}`}>{component.label}</a></li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	</aside>

	<div class="min-w-0 space-y-6">
		<BlockRenderer sections={block.children ?? []} />
	</div>
</div>

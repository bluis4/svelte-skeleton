<script>
    /** @type {{ block: { label?: string; title?: string; content?: string; links?: { label: string; href: string }[]; side?: string } }} */
    let { block } = $props();

    const sides = /** @type {Record<string, string>} */ ({ start: 'drawer-start', end: 'drawer-end' });
    let sideClass = $derived(sides[block.side ?? 'start'] ?? sides.start);
</script>

<div class="drawer {sideClass} my-4 min-h-64 rounded-box border border-base-300 bg-base-100">
    <input id="service-drawer-preview" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-start justify-center gap-3 p-6">
        <p>{block.content ?? 'Open the service navigation to explore available support areas.'}</p>
        <label for="service-drawer-preview" class="btn btn-primary drawer-button">{block.label ?? 'Open service menu'}</label>
    </div>
    <div class="drawer-side z-10">
        <label for="service-drawer-preview" aria-label="Close service menu" class="drawer-overlay"></label>
        <aside class="min-h-full w-72 bg-base-200 p-6" aria-label={block.title ?? 'Service navigation'}>
            <h2 class="mb-4 text-lg font-bold">{block.title ?? 'Service areas'}</h2>
            <ul class="menu w-full">
                {#each block.links ?? [{ label: 'Cloud operations', href: '/about/' }, { label: 'Security services', href: '/about/' }, { label: 'Service desk', href: '/contact/' }] as item}
                    <li><a href={item.href}>{item.label}</a></li>
                {/each}
            </ul>
        </aside>
    </div>
</div>

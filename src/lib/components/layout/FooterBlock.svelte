<script>
    /** @type {{ block: { brand?: string; description?: string; copyright?: string; columns?: { title: string; links: { label: string; href: string }[] }[] } }} */
    let { block } = $props();

    let columns = $derived(block.columns?.length ? block.columns : [
        { title: 'Services', links: [{ label: 'Cloud operations', href: '/about/' }, { label: 'Security', href: '/about/' }] },
        { title: 'Support', links: [{ label: 'Service desk', href: '/contact/' }, { label: 'Coverage plans', href: '/about/' }] }
    ]);
</script>

<footer class="footer my-4 rounded-box bg-base-200 p-8 text-base-content sm:footer-horizontal">
    <aside class="max-w-sm">
        <p class="text-lg font-bold">{block.brand ?? 'Northstar IT'}</p>
        <p>{block.description ?? 'Reliable cloud, security, and support services for distributed teams.'}</p>
    </aside>
    {#each columns as column}
        <nav>
            <h3 class="footer-title">{column.title}</h3>
            {#each column.links ?? [] as link}
                <a class="link link-hover" href={link.href}>{link.label}</a>
            {/each}
        </nav>
    {/each}
    <small class="basis-full opacity-70">{block.copyright ?? '© Northstar IT. All rights reserved.'}</small>
</footer>

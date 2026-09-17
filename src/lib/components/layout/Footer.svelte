<!-- src/lib/components/layout/Footer.svelte -->
<script>
    let { site, menuItems = [] } = $props();
    const year = new Date().getFullYear();
</script>

<footer class="footer footer-center bg-base-200 text-base-content p-10">
    <nav>
        <ul class="menu menu-horizontal">
            {#each menuItems as item}
                <li><a href={item.slug}>{item.title}</a></li>
            {/each}
        </ul>
    </nav>
    <aside>
        <p>{site.site_name} {site.brand_highlight} — {site.tagline}</p>
        <p class="text-sm opacity-70">© {year} {site.site_name} {site.brand_highlight}. All rights reserved.</p>
    </aside>
</footer>
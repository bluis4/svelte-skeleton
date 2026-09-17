<!-- src/lib/components/layout/Header.svelte -->
<script>
    let { site, menuItems = [] } = $props();
</script>

<header class="navbar sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-200 px-4">
    <div class="navbar-start">
        <div class="dropdown">
            <button tabindex="0" class="btn btn-ghost lg:hidden" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </button>
            <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                {#each menuItems as item}
                    <li><a href={item.slug}>{item.title}</a></li>
                {/each}
            </ul>
        </div>
        <a href="/" class="btn btn-ghost text-xl font-bold tracking-tight text-primary">
            {site.site_name}<span class="text-base-content">{site.brand_highlight}</span>
        </a>
    </div>

    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 font-medium">
            {#each menuItems as item}
                <li><a href={item.slug}>{item.title}</a></li>
            {/each}
        </ul>
    </div>

    <div class="navbar-end gap-2">
        {#if site.cta_text && site.cta_link}
            <a href={site.cta_link} class="btn btn-primary btn-sm">{site.cta_text}</a>
        {/if}
    </div>
</header>
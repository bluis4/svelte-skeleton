<script>
    /** @type {{ block: { variant?: string; label?: string } }} */
    let { block } = $props();

    let variant = $derived(block.variant ?? 'card');
</script>

<div class="my-4 rounded-box border border-base-300 p-4" role="status" aria-label={block.label ?? 'Loading content'}>
    {#if variant === 'avatar'}
        <div class="flex items-center gap-4">
            <div class="skeleton h-12 w-12 shrink-0 rounded-full"></div>
            <div class="space-y-2">
                <div class="skeleton h-4 w-28"></div>
                <div class="skeleton h-3 w-40"></div>
            </div>
        </div>
    {:else if variant === 'text'}
        <div class="space-y-3">
            <div class="skeleton h-4 w-3/4"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-5/6"></div>
        </div>
    {:else}
        <div class="space-y-4">
            <div class="skeleton h-32 w-full"></div>
            <div class="space-y-2">
                <div class="skeleton h-4 w-1/2"></div>
                <div class="skeleton h-4 w-full"></div>
                <div class="skeleton h-4 w-4/5"></div>
            </div>
        </div>
    {/if}
    <span class="sr-only">Loading</span>
</div>

<script>
    /** @type {{ block: { variant?: string; size?: string; label?: string; text?: string } }} */
    let { block } = $props();

    const variants = /** @type {Record<string, string>} */ ({
        spinner: 'loading-spinner',
        dots: 'loading-dots',
        ring: 'loading-ring',
        ball: 'loading-ball',
        bars: 'loading-bars',
        infinity: 'loading-infinity'
    });
    const sizes = /** @type {Record<string, string>} */ ({
        xs: 'loading-xs',
        sm: 'loading-sm',
        md: 'loading-md',
        lg: 'loading-lg',
        xl: 'loading-xl'
    });

    let variantClass = $derived(variants[block.variant ?? 'spinner'] ?? variants.spinner);
    let sizeClass = $derived(sizes[block.size ?? 'md'] ?? sizes.md);
</script>

<div class="my-4 flex items-center gap-3" aria-live="polite">
    <span class="loading {variantClass} {sizeClass} text-primary" role="status" aria-label={block.label ?? 'Loading'}></span>
    {#if block.text}
        <span>{block.text}</span>
    {/if}
</div>

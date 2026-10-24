<script>
    /** @type {{ block: { tip: string; label?: string; placement?: string; color?: string } }} */
    let { block } = $props();

    const placements = /** @type {Record<string, string>} */ ({
        top: 'tooltip-top',
        bottom: 'tooltip-bottom',
        left: 'tooltip-left',
        right: 'tooltip-right'
    });
    const colors = /** @type {Record<string, string>} */ ({
        default: '',
        primary: 'tooltip-primary',
        secondary: 'tooltip-secondary',
        accent: 'tooltip-accent',
        info: 'tooltip-info',
        success: 'tooltip-success',
        warning: 'tooltip-warning',
        error: 'tooltip-error'
    });

    let placementClass = $derived(placements[block.placement ?? 'top'] ?? placements.top);
    let colorClass = $derived(colors[block.color ?? 'default'] ?? colors.default);
</script>

<div class="my-8">
    <span class="tooltip {placementClass} {colorClass}" data-tip={block.tip}>
        <button type="button" class="btn btn-outline" aria-label={block.label ?? block.tip}>{block.label ?? 'Hover for details'}</button>
    </span>
</div>

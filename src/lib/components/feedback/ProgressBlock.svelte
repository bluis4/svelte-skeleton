<script>
    /** @type {{ block: { value?: number; label?: string; color?: string; show_value?: boolean } }} */
    let { block } = $props();

    const colors = /** @type {Record<string, string>} */ ({
        neutral: 'progress-neutral',
        primary: 'progress-primary',
        secondary: 'progress-secondary',
        accent: 'progress-accent',
        info: 'progress-info',
        success: 'progress-success',
        warning: 'progress-warning',
        error: 'progress-error'
    });

    let value = $derived(Math.min(100, Math.max(0, Number(block.value ?? 0))));
    let colorClass = $derived(colors[block.color ?? 'primary'] ?? colors.primary);
</script>

<div class="my-4 space-y-2">
    {#if block.label || block.show_value}
        <div class="flex items-center justify-between gap-4 text-sm">
            {#if block.label}<span>{block.label}</span>{/if}
            {#if block.show_value}<span>{value}%</span>{/if}
        </div>
    {/if}
    <progress class="progress {colorClass} w-full" value={value} max="100" aria-label={block.label ?? 'Progress'}>{value}%</progress>
</div>

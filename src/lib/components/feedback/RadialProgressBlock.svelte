<script>
    /** @type {{ block: { value?: number; label?: string; size?: string; thickness?: string; color?: string } }} */
    let { block } = $props();

    const colors = /** @type {Record<string, string>} */ ({
        neutral: 'text-neutral',
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent',
        info: 'text-info',
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error'
    });

    let value = $derived(Math.min(100, Math.max(0, Number(block.value ?? 0))));
    let colorClass = $derived(colors[block.color ?? 'primary'] ?? colors.primary);
    let radialStyle = $derived(`--value: ${value}; --size: ${block.size ?? '6rem'}; --thickness: ${block.thickness ?? '0.5rem'};`);
</script>

<div class="my-4 flex flex-col items-start gap-2">
    <div class="radial-progress {colorClass}" style={radialStyle} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" aria-label={block.label ?? 'Radial progress'}>
        {value}%
    </div>
    {#if block.label}<span class="text-sm">{block.label}</span>{/if}
</div>

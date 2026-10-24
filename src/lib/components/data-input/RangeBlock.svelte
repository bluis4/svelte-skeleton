<script>
    /** @type {{ block: { label?: string; min?: number; max?: number; value?: number; step?: number; color?: string } }} */
    let { block } = $props();

    const colors = /** @type {Record<string, string>} */ ({
        primary: 'range-primary', secondary: 'range-secondary', accent: 'range-accent',
        success: 'range-success', warning: 'range-warning', error: 'range-error'
    });
    let colorClass = $derived(colors[block.color ?? 'primary'] ?? colors.primary);
    let min = $derived(Number(block.min ?? 0));
    let max = $derived(Math.max(min, Number(block.max ?? 100)));
    let value = $derived(Math.min(max, Math.max(min, Number(block.value ?? 50))));
</script>

<label class="form-control my-4 w-full max-w-md">
    <span class="label"><span class="label-text">{block.label ?? 'Service capacity'}</span><span class="label-text-alt">{value}</span></span>
    <input class="range {colorClass}" type="range" min={min} max={max} step={block.step ?? 1} value={value} aria-label={block.label ?? 'Service capacity'} />
</label>

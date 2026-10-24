<script>
    /** @type {{ block: { label: string; checked?: boolean; color?: string; disabled?: boolean } }} */
    let { block } = $props();

    const colors = /** @type {Record<string, string>} */ ({
        primary: 'toggle-primary', secondary: 'toggle-secondary', accent: 'toggle-accent',
        success: 'toggle-success', warning: 'toggle-warning', error: 'toggle-error'
    });
    let colorClass = $derived(colors[block.color ?? 'primary'] ?? colors.primary);
</script>

<label class="label my-2 cursor-pointer justify-start gap-3">
    <input class="toggle {colorClass}" type="checkbox" checked={block.checked ?? false} disabled={block.disabled ?? false} />
    <span class="label-text">{block.label}</span>
</label>

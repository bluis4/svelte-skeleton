<script>
    /** @type {{ block: { label: string; checked?: boolean; color?: string; disabled?: boolean } }} */
    let { block } = $props();

    const colors = /** @type {Record<string, string>} */ ({
        primary: 'checkbox-primary', secondary: 'checkbox-secondary', accent: 'checkbox-accent',
        success: 'checkbox-success', warning: 'checkbox-warning', error: 'checkbox-error'
    });
    let colorClass = $derived(colors[block.color ?? 'primary'] ?? colors.primary);
</script>

<label class="label my-2 cursor-pointer justify-start gap-3">
    <input class="checkbox {colorClass}" type="checkbox" checked={block.checked ?? false} disabled={block.disabled ?? false} />
    <span class="label-text">{block.label}</span>
</label>

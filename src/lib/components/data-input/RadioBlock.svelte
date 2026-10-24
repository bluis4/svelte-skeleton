<script>
    /** @type {{ block: { label: string; name?: string; options?: string[]; selected?: string; color?: string } }} */
    let { block } = $props();

    const colors = /** @type {Record<string, string>} */ ({
        primary: 'radio-primary', secondary: 'radio-secondary', accent: 'radio-accent',
        success: 'radio-success', warning: 'radio-warning', error: 'radio-error'
    });
    let colorClass = $derived(colors[block.color ?? 'primary'] ?? colors.primary);
    let options = $derived(block.options?.length ? block.options : ['Standard', 'Priority', 'Critical']);
</script>

<fieldset class="my-4 space-y-2">
    <legend class="label"><span class="label-text">{block.label}</span></legend>
    {#each options as option, index}
        <label class="label cursor-pointer justify-start gap-3">
            <input class="radio {colorClass}" type="radio" name={block.name ?? 'service-priority'} value={option} checked={option === (block.selected ?? options[0])} />
            <span class="label-text">{option}</span>
        </label>
    {/each}
</fieldset>

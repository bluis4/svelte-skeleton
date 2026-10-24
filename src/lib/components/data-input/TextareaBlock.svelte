<script>
    /** @type {{ block: { label?: string; placeholder?: string; value?: string; rows?: number; size?: string } }} */
    let { block } = $props();

    const sizes = /** @type {Record<string, string>} */ ({ xs: 'textarea-xs', sm: 'textarea-sm', md: 'textarea-md', lg: 'textarea-lg' });
    let sizeClass = $derived(sizes[block.size ?? 'md'] ?? sizes.md);
</script>

<label class="form-control my-4 w-full max-w-lg">
    <span class="label"><span class="label-text">{block.label ?? 'How can we help?'}</span></span>
    <textarea class="textarea textarea-bordered {sizeClass} w-full" rows={block.rows ?? 4} placeholder={block.placeholder ?? 'Describe the service request'}>{block.value ?? ''}</textarea>
</label>

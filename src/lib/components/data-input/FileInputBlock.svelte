<script>
    /** @type {{ block: { label?: string; accept?: string; multiple?: boolean; size?: string } }} */
    let { block } = $props();

    const sizes = /** @type {Record<string, string>} */ ({
        xs: 'file-input-xs', sm: 'file-input-sm', md: 'file-input-md', lg: 'file-input-lg'
    });
    let sizeClass = $derived(sizes[block.size ?? 'md'] ?? sizes.md);
</script>

<label class="form-control my-4 w-full max-w-md">
    <span class="label"><span class="label-text">{block.label ?? 'Attach a file'}</span></span>
    <input class="file-input file-input-bordered {sizeClass} w-full" type="file" accept={block.accept ?? '*/*'} multiple={block.multiple ?? false} />
</label>

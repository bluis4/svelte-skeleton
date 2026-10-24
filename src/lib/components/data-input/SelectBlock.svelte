<script>
    /** @type {{ block: { label?: string; options?: string[]; value?: string; size?: string } }} */
    let { block } = $props();

    const sizes = /** @type {Record<string, string>} */ ({ xs: 'select-xs', sm: 'select-sm', md: 'select-md', lg: 'select-lg' });
    let sizeClass = $derived(sizes[block.size ?? 'md'] ?? sizes.md);
    let options = $derived(block.options?.length ? block.options : ['Cloud monitoring', 'Endpoint protection', 'Service desk']);
</script>

<label class="form-control my-4 w-full max-w-sm">
    <span class="label"><span class="label-text">{block.label ?? 'Choose a service'}</span></span>
    <select class="select select-bordered {sizeClass} w-full" value={block.value ?? options[0]}>
        {#each options as option}<option value={option}>{option}</option>{/each}
    </select>
</label>

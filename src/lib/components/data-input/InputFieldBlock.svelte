<script>
    /** @type {{ block: { label?: string; input_type?: string; placeholder?: string; value?: string; size?: string; color?: string; required?: boolean } }} */
    let { block } = $props();

    const types = /** @type {Record<string, string>} */ ({ text: 'text', email: 'email', password: 'password', search: 'search', tel: 'tel', url: 'url' });
    const sizes = /** @type {Record<string, string>} */ ({ xs: 'input-xs', sm: 'input-sm', md: 'input-md', lg: 'input-lg' });
    const colors = /** @type {Record<string, string>} */ ({ default: '', primary: 'input-primary', secondary: 'input-secondary', accent: 'input-accent', success: 'input-success', warning: 'input-warning', error: 'input-error' });
    let type = $derived(types[block.input_type ?? 'text'] ?? types.text);
    let sizeClass = $derived(sizes[block.size ?? 'md'] ?? sizes.md);
    let colorClass = $derived(colors[block.color ?? 'default'] ?? colors.default);
</script>

<label class="form-control my-4 w-full max-w-sm">
    <span class="label"><span class="label-text">{block.label ?? 'Contact email'}</span></span>
    <input class="input input-bordered {sizeClass} {colorClass} w-full" type={type} placeholder={block.placeholder ?? 'name@example.com'} value={block.value ?? ''} required={block.required ?? false} />
</label>

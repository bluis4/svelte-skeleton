<!-- src/lib/components/actions/ButtonBlock.svelte -->
<script>
	/** @type {{ block: { text?: string; link?: string; variant?: string; size?: string; shape?: string; modifiers?: string[]; disabled?: boolean; is_button?: boolean } }} */
    let { block } = $props();

    const variants = /** @type {Record<string, string>} */ ({
        primary: 'btn-primary', secondary: 'btn-secondary', accent: 'btn-accent',
        info: 'btn-info', success: 'btn-success', warning: 'btn-warning',
        error: 'btn-error', neutral: 'btn-neutral', ghost: 'btn-ghost'
    });
    const sizes = /** @type {Record<string, string>} */ ({ xs: 'btn-xs', sm: 'btn-sm', md: '', lg: 'btn-lg' });
    const shapes = /** @type {Record<string, string>} */ ({ default: '', circle: 'btn-circle', square: 'btn-square' });
    const mods = /** @type {Record<string, string>} */ ({ outline: 'btn-outline', link: 'btn-link', wide: 'btn-wide', block: 'btn-block' });

    let classes = $derived.by(() => {
        const v = variants[block.variant ?? ''] || 'btn-primary';
        const s = sizes[block.size ?? ''] || '';
        const sh = shapes[block.shape ?? ''] || '';
        const m = (block.modifiers || []).map(x => mods[x]).filter(Boolean).join(' ');
        const d = block.disabled ? 'btn-disabled' : '';
        return `btn ${v} ${s} ${sh} ${m} ${d}`.trim().replace(/\s+/g, ' ');
    });

    // If it's a block button, drop the flex wrapper so it can span 100% width
    let wrapperClass = $derived(block.modifiers?.includes('block') ? 'my-4' : 'flex self-start my-4');
</script>

<div class={wrapperClass}>
    {#if block.is_button}
        <button class={classes} disabled={block.disabled} type="button">
            {block.text}
        </button>
    {:else}
        <a
            href={block.link || '#'}
            class={classes}
            aria-disabled={block.disabled || undefined}
            tabindex={block.disabled ? -1 : undefined}
        >
            {block.text}
        </a>
    {/if}
</div>

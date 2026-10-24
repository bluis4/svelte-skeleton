<script>
    /** @type {{ block: { shape?: string; text?: string; color?: string } }} */
    let { block } = $props();

    const shapes = /** @type {Record<string, string>} */ ({
        circle: 'mask-circle', squircle: 'mask-squircle', hexagon: 'mask-hexagon',
        triangle: 'mask-triangle', heart: 'mask-heart', star: 'mask-star-2'
    });
    const colors = /** @type {Record<string, string>} */ ({
        primary: 'bg-primary text-primary-content', secondary: 'bg-secondary text-secondary-content',
        accent: 'bg-accent text-accent-content', neutral: 'bg-neutral text-neutral-content'
    });
    let shapeClass = $derived(shapes[block.shape ?? 'squircle'] ?? shapes.squircle);
    let colorClass = $derived(colors[block.color ?? 'primary'] ?? colors.primary);
</script>

<div class="my-4 flex h-40 w-40 items-center justify-center {shapeClass} {colorClass} text-3xl font-bold" role="img" aria-label={block.text ?? 'Masked shape'}>
    {block.text ?? 'IT'}
</div>

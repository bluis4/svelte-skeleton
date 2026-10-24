<script>
    /** @type {{ block: { label?: string; value?: number; max?: number; half?: boolean; size?: string } }} */
    let { block } = $props();

    const sizes = /** @type {Record<string, string>} */ ({ xs: 'rating-xs', sm: 'rating-sm', md: 'rating-md', lg: 'rating-lg' });
    let sizeClass = $derived(sizes[block.size ?? 'md'] ?? sizes.md);
    let max = $derived(Math.min(10, Math.max(1, Math.floor(Number(block.max ?? 5)))));
    let value = $derived(Math.min(max, Math.max(0, Number(block.value ?? 4))));
</script>

<fieldset class="my-4">
    <legend class="label"><span class="label-text">{block.label ?? 'Rate service quality'}</span></legend>
    <div class="rating {sizeClass}" role="radiogroup" aria-label={block.label ?? 'Rate service quality'}>
        {#if block.half}<input class="rating-hidden" type="radio" name="service-rating" value="0" aria-label="No rating" checked={value === 0} />{/if}
        {#each Array.from({ length: max }, (_, index) => index + 1) as star}
            <input class="mask mask-star-2 bg-warning" type="radio" name="service-rating" value={star} aria-label={`${star} star`} checked={value === star} />
        {/each}
    </div>
</fieldset>

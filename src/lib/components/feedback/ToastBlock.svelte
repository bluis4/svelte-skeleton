<script>
    /** @type {{ block: { title?: string; text: string; variant?: string; placement?: string } }} */
    let { block } = $props();

    const variants = /** @type {Record<string, string>} */ ({
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error'
    });
    const placements = /** @type {Record<string, string>} */ ({
        'top-start': 'toast-top toast-start',
        'top-center': 'toast-top toast-center',
        'top-end': 'toast-top toast-end',
        'middle-start': 'toast-middle toast-start',
        'middle-center': 'toast-middle toast-center',
        'middle-end': 'toast-middle toast-end',
        'bottom-start': 'toast-bottom toast-start',
        'bottom-center': 'toast-bottom toast-center',
        'bottom-end': 'toast-bottom toast-end'
    });

    let variantClass = $derived(variants[block.variant ?? 'info'] ?? variants.info);
    let placementClass = $derived(placements[block.placement ?? 'bottom-end'] ?? placements['bottom-end']);
</script>

<div class="my-4 rounded-box border border-base-300 p-4">
    <div class="toast {placementClass} !static !transform-none !p-0">
        <div class="alert {variantClass}" role="status" aria-live="polite">
            <div>
                {#if block.title}<h3 class="font-bold">{block.title}</h3>{/if}
                <div class="text-sm">{block.text}</div>
            </div>
        </div>
    </div>
</div>

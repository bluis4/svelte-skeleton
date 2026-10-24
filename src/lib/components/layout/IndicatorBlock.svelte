<script>
    /** @type {{ block: { content?: string; indicator?: string; color?: string; position?: string } }} */
    let { block } = $props();

    const colors = /** @type {Record<string, string>} */ ({
        primary: 'badge-primary', secondary: 'badge-secondary', accent: 'badge-accent',
        info: 'badge-info', success: 'badge-success', warning: 'badge-warning', error: 'badge-error'
    });
    const positions = /** @type {Record<string, string>} */ ({
        'top-start': 'indicator-top indicator-start', 'top-center': 'indicator-top indicator-center', 'top-end': 'indicator-top indicator-end',
        'middle-start': 'indicator-middle indicator-start', 'middle-center': 'indicator-middle indicator-center', 'middle-end': 'indicator-middle indicator-end',
        'bottom-start': 'indicator-bottom indicator-start', 'bottom-center': 'indicator-bottom indicator-center', 'bottom-end': 'indicator-bottom indicator-end'
    });
    let colorClass = $derived(colors[block.color ?? 'primary'] ?? colors.primary);
    let positionClass = $derived(positions[block.position ?? 'top-end'] ?? positions['top-end']);
</script>

<div class="indicator {positionClass} my-4">
    <span class="indicator-item badge {colorClass}">{block.indicator ?? 'New'}</span>
    <div class="rounded-box border border-base-300 bg-base-100 p-6">{block.content ?? 'Cloud backup status'}</div>
</div>

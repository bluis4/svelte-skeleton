<script>
    /** @type {{ block: { items?: string[]; direction?: string; style?: string } }} */
    let { block } = $props();

    const directions = /** @type {Record<string, string>} */ ({ horizontal: 'join-horizontal', vertical: 'join-vertical' });
    const styles = /** @type {Record<string, string>} */ ({ button: 'btn', input: 'input input-bordered', badge: 'badge badge-outline' });
    let directionClass = $derived(directions[block.direction ?? 'horizontal'] ?? directions.horizontal);
    let itemClass = $derived(styles[block.style ?? 'button'] ?? styles.button);
    let items = $derived(block.items?.length ? block.items : ['Cloud', 'Security', 'Support']);
</script>

<div class="join {directionClass} my-4" role="group" aria-label="Grouped service filters">
    {#each items as item}
        <button type="button" class="{itemClass} join-item">{item}</button>
    {/each}
</div>

<script>
    /** @type {{ block: { label?: string; options?: string[]; selected?: string } }} */
    let { block } = $props();

    let options = $derived(block.options?.length ? block.options : ['All', 'Cloud', 'Security', 'Support']);
</script>

<fieldset class="my-4">
    <legend class="label"><span class="label-text">{block.label ?? 'Filter services'}</span></legend>
    <div class="filter">
        {#each options as option, index}
            <input class="btn" type="radio" name="service-filter" aria-label={option} checked={option === (block.selected ?? options[0])} />
        {/each}
    </div>
</fieldset>

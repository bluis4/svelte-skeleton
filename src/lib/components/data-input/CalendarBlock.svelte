<script>
    /** @type {{ block: { label?: string; value?: string; name?: string } }} */
    let { block } = $props();
</script>

<label class="form-control my-4 w-full max-w-sm">
    <span class="label"><span class="label-text">{block.label ?? 'Choose a date'}</span></span>
    <input class="input input-bordered" type="date" name={block.name ?? 'service-date'} value={block.value ?? ''} aria-label={block.label ?? 'Choose a date'} />
</label>

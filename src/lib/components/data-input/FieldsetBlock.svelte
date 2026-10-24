<script>
    /** @type {{ block: { legend: string; label?: string; placeholder?: string; value?: string; description?: string } }} */
    let { block } = $props();
</script>

<fieldset class="fieldset my-4 w-full max-w-md rounded-box border border-base-300 bg-base-200 p-4">
    <legend class="fieldset-legend">{block.legend}</legend>
    <label class="label" for="fieldset-value"><span class="label-text">{block.label ?? 'Service name'}</span></label>
    <input id="fieldset-value" class="input input-bordered w-full" type="text" placeholder={block.placeholder ?? 'e.g. Cloud monitoring'} value={block.value ?? ''} />
    <p class="label">{block.description ?? 'Enter the service to include in this request.'}</p>
</fieldset>

<script>
    /** @type {{ block: { label: string; hint?: string; required?: boolean } }} */
    let { block } = $props();
</script>

<div class="form-control my-4 w-full max-w-sm">
    <label class="label" for="label-block-example">
        <span class="label-text">{block.label}{#if block.required}<span class="text-error" aria-hidden="true"> *</span>{/if}</span>
        {#if block.hint}<span class="label-text-alt">{block.hint}</span>{/if}
    </label>
    <input id="label-block-example" class="input input-bordered" type="text" placeholder="Example field" />
</div>

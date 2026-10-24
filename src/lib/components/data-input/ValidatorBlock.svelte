<script>
    /** @type {{ block: { label?: string; value?: string; pattern?: string; hint?: string } }} */
    let { block } = $props();
</script>

<label class="form-control my-4 w-full max-w-sm">
    <span class="label"><span class="label-text">{block.label ?? 'Work email'}</span></span>
    <input class="input input-bordered validator w-full" type="email" value={block.value ?? 'person@example.com'} pattern={block.pattern ?? '[^@\\s]+@[^@\\s]+\\.[^@\\s]+'} required />
    <p class="validator-hint">{block.hint ?? 'Enter a valid email address.'}</p>
</label>

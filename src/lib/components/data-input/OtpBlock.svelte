<script>
    /** @type {{ block: { label?: string; digits?: number } }} */
    let { block } = $props();

    let digits = $derived(Math.min(8, Math.max(4, Math.floor(Number(block.digits ?? 6)))));
</script>

<fieldset class="my-4">
    <legend class="label"><span class="label-text">{block.label ?? 'One-time verification code'}</span></legend>
    <label class="otp otp-joined">
        {#each Array.from({ length: digits }, (_, index) => index) as _}
            <span></span>
        {/each}
        <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength={digits} pattern={`[0-9]{${digits}}`} aria-label={block.label ?? 'One-time verification code'} required />
    </label>
</fieldset>

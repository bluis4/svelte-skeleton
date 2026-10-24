<script>
    /** @type {{ block: { content?: string; theme?: string } }} */
    let { block } = $props();

    const themes = /** @type {Record<string, string>} */ ({
        dark: 'bg-neutral-900 text-neutral-content', light: 'bg-base-100 text-base-content', primary: 'bg-primary text-primary-content'
    });
    let themeClass = $derived(themes[block.theme ?? 'dark'] ?? themes.dark);
</script>

<div class="mockup-phone my-4">
    <div class="mockup-phone-camera"></div>
    <div class="mockup-phone-display grid min-h-96 place-content-center p-6 text-center {themeClass}">
        {block.content ?? 'On-call engineer notified. Incident INC-2048 is being investigated.'}
    </div>
</div>

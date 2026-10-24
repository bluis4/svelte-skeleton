<script>
    /** @type {{ block: { url?: string; content?: string } }} */
    let { block } = $props();
</script>

<div class="mockup-browser my-4 w-full border border-base-300 bg-base-100">
    <div class="mockup-browser-toolbar">
        <div class="input">{block.url ?? 'https://status.northstar.example'}</div>
    </div>
    <div class="grid min-h-40 place-content-center border-t border-base-300 p-6 text-center">
        {block.content ?? 'All managed services are operational'}
    </div>
</div>

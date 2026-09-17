<!-- src/routes/+layout.svelte -->
<script>
    // We use the $lib alias to point directly to src/lib
    import '$lib/assets/app.css';
    
    let { children } = $props();
</script>

{@render children()}
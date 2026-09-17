<!-- src/lib/components/blocks/BadgeBlock.svelte -->
<script>
    let { block } = $props();

    // NEVER write `badge-${block.style}` — Tailwind's JIT scans source files
    // for COMPLETE class names. Concatenation produces classes that don't
    // exist in the compiled CSS. Full strings in a map = JIT-safe.
    const styles = {
        primary: 'badge-primary',
        secondary: 'badge-secondary',
        accent: 'badge-accent'
    };
</script>

<span class="badge {styles[block.style] ?? styles.primary}">{block.text}</span>
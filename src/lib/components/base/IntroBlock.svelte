<!-- src/lib/components/blocks/IntroBlock.svelte -->
<script>
    let { block } = $props();

    /**
     * @param {unknown} value
     * @param {number} min
     * @param {number} max
     * @param {number} fallback
     */
    const clamp = (value, min, max, fallback) => {
        const number = Number(value);
        return Number.isFinite(number) ? Math.min(Math.max(number, min), max) : fallback;
    };

    const flexDirections = ['row', 'row-reverse', 'column'];

    let layout = $derived(block.layout ?? {});
    let isGrid = $derived(layout.mode === 'grid');
    let legacyDirection = $derived(block.image_position === 'left' ? 'row-reverse' : 'row');
    let flexDirection = $derived(flexDirections.includes(layout.direction) ? layout.direction : legacyDirection);
    let gap = $derived(clamp(layout.gap, 0, 12, 2.5));
    let columns = $derived(clamp(layout.columns, 1, 4, 2));
    let rows = $derived(clamp(layout.rows, 1, 4, 1));
    let contentColumn = $derived(clamp(layout.content_column, 1, columns, 1));
    let contentRow = $derived(clamp(layout.content_row, 1, rows, 1));
    let imageColumn = $derived(clamp(layout.image_column, 1, columns, Math.min(2, columns)));
    let imageRow = $derived(clamp(layout.image_row, 1, rows, 1));
    let layoutStyle = $derived(
        isGrid
            ? `--intro-gap: ${gap}rem; --intro-grid-columns: ${columns}; --intro-grid-rows: ${rows}; --intro-content-column: ${contentColumn}; --intro-content-row: ${contentRow}; --intro-image-column: ${imageColumn}; --intro-image-row: ${imageRow};`
            : `--intro-gap: ${gap}rem; --intro-flex-direction: ${flexDirection};`
    );
</script>

<section class="py-16 px-6 max-w-6xl mx-auto">
    <div class="intro-layout {isGrid ? 'intro-layout--grid' : 'intro-layout--flex'}" style={layoutStyle}>
        <div class="intro-layout__content">
            <h2 class="text-3xl font-bold mb-4">{block.title}</h2>
            <p class="text-base-content/80 text-lg">{block.text}</p>
        </div>
        {#if block.image}
            <figure class="intro-layout__image w-full">
                <img src={block.image} alt={block.title ?? ''} width="1200" height="900" class="rounded-3xl w-full object-cover aspect-[4/3]" loading="lazy" />
            </figure>
        {/if}
    </div>
</section>

<style>
    .intro-layout {
        align-items: center;
        gap: var(--intro-gap, 2.5rem);
    }

    .intro-layout--flex {
        display: flex;
        flex-direction: var(--intro-flex-direction, row);
    }

    .intro-layout--grid {
        display: grid;
        grid-template-columns: repeat(var(--intro-grid-columns, 2), minmax(0, 1fr));
        grid-template-rows: repeat(var(--intro-grid-rows, 1), minmax(0, auto));
    }

    .intro-layout--grid .intro-layout__content {
        grid-column: var(--intro-content-column, 1);
        grid-row: var(--intro-content-row, 1);
    }

    .intro-layout--grid .intro-layout__image {
        grid-column: var(--intro-image-column, 2);
        grid-row: var(--intro-image-row, 1);
    }

    @media (min-width: 768px) {
        .intro-layout--flex .intro-layout__content,
        .intro-layout--flex .intro-layout__image {
            width: 50%;
        }
    }

    @media (max-width: 767px) {
        .intro-layout--flex {
            flex-direction: column !important;
        }

        .intro-layout--grid {
            grid-template-columns: minmax(0, 1fr) !important;
            grid-template-rows: auto !important;
        }

        .intro-layout--grid .intro-layout__content,
        .intro-layout--grid .intro-layout__image {
            grid-column: auto !important;
            grid-row: auto !important;
        }
    }
</style>
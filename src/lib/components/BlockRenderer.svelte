<!-- src/lib/components/BlockRenderer.svelte -->
<script>
    import HeroBlock from './layout/HeroBlock.svelte';
    import IntroBlock from './base/IntroBlock.svelte';
    import CardsBlock from './base/CardsBlock.svelte';
    import CardBlock from './data-display/CardBlock.svelte';
    import CtaBannerBlock from './base/CtaBannerBlock.svelte';
    import TextBlock from './base/TextBlock.svelte';
    import BadgeBlock from './data-display/BadgeBlock.svelte';
    import ButtonBlock from './actions/ButtonBlock.svelte';
    import ImageBlock from './base/ImageBlock.svelte';

    let { sections = [] } = $props();

    const registry = {
        hero: HeroBlock,
        intro: IntroBlock,
        cards: CardsBlock,
        card: CardBlock,
        cta_banner: CtaBannerBlock,
        text: TextBlock,
        badge: BadgeBlock,
        button: ButtonBlock,
        image: ImageBlock
    };
</script>

{#each sections as block}
    {@const Component = registry[block.type]}
    {#if Component}
        <Component {block} />
    {:else if import.meta.env.DEV}
        <div class="p-4 my-4 rounded-lg bg-warning/10 border border-warning text-xs font-mono">
            Unmapped block type: <strong>{block.type}</strong>
        </div>
    {/if}
{/each}
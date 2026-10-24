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
    import AlertBlock from './feedback/AlertBlock.svelte';
    import LoadingBlock from './feedback/LoadingBlock.svelte';
    import ProgressBlock from './feedback/ProgressBlock.svelte';
    import RadialProgressBlock from './feedback/RadialProgressBlock.svelte';
    import SkeletonBlock from './feedback/SkeletonBlock.svelte';
    import ToastBlock from './feedback/ToastBlock.svelte';
    import TooltipBlock from './feedback/TooltipBlock.svelte';
    import DocsLayoutBlock from './layout/DocsLayoutBlock.svelte';
    import HeadingBlock from './base/HeadingBlock.svelte';
    import DividerBlock from './base/DividerBlock.svelte';
    import BreadcrumbBlock from './navigation/BreadcrumbBlock.svelte';
    import DockBlock from './navigation/DockBlock.svelte';
    import LinkBlock from './navigation/LinkBlock.svelte';
    import MegamenuBlock from './navigation/MegamenuBlock.svelte';
    import MenuBlock from './navigation/MenuBlock.svelte';
    import NavbarBlock from './navigation/NavbarBlock.svelte';
    import PaginationBlock from './navigation/PaginationBlock.svelte';
    import StepsBlock from './navigation/StepsBlock.svelte';
    import StatBlock from './data-display/StatBlock.svelte';
    import TableBlock from './data-display/TableBlock.svelte';
    import AccordionBlock from './data-display/AccordionBlock.svelte';
    import AvatarBlock from './data-display/AvatarBlock.svelte';
    import AuraBlock from './data-display/AuraBlock.svelte';
    import CarouselBlock from './data-display/CarouselBlock.svelte';
    import ChatBubbleBlock from './data-display/ChatBubbleBlock.svelte';
    import CollapseBlock from './data-display/CollapseBlock.svelte';
    import CountdownBlock from './data-display/CountdownBlock.svelte';
    import DiffBlock from './data-display/DiffBlock.svelte';
    import Hover3DCardBlock from './data-display/Hover3DCardBlock.svelte';
    import HoverGalleryBlock from './data-display/HoverGalleryBlock.svelte';
    import KbdBlock from './data-display/KbdBlock.svelte';
    import ListBlock from './data-display/ListBlock.svelte';
    import StatusBlock from './data-display/StatusBlock.svelte';
    import TextRotateBlock from './data-display/TextRotateBlock.svelte';
    import TimelineBlock from './data-display/TimelineBlock.svelte';
    import TabsBlock from './navigation/TabsBlock.svelte';
    import DropdownBlock from './actions/DropdownBlock.svelte';
    import FabBlock from './actions/FabBlock.svelte';
    import ModalBlock from './actions/ModalBlock.svelte';
    import SwapBlock from './actions/SwapBlock.svelte';
    import ThemeControllerBlock from './actions/ThemeControllerBlock.svelte';
    import CalendarBlock from './data-input/CalendarBlock.svelte';
    import CheckboxBlock from './data-input/CheckboxBlock.svelte';
    import FieldsetBlock from './data-input/FieldsetBlock.svelte';
    import FileInputBlock from './data-input/FileInputBlock.svelte';
    import FilterBlock from './data-input/FilterBlock.svelte';
    import LabelBlock from './data-input/LabelBlock.svelte';
    import RadioBlock from './data-input/RadioBlock.svelte';
    import RangeBlock from './data-input/RangeBlock.svelte';
    import RatingBlock from './data-input/RatingBlock.svelte';
    import SelectBlock from './data-input/SelectBlock.svelte';
    import InputFieldBlock from './data-input/InputFieldBlock.svelte';
    import TextareaBlock from './data-input/TextareaBlock.svelte';
    import ToggleBlock from './data-input/ToggleBlock.svelte';
    import ValidatorBlock from './data-input/ValidatorBlock.svelte';
    import OtpBlock from './data-input/OtpBlock.svelte';
    import DrawerSidebarBlock from './layout/DrawerSidebarBlock.svelte';
    import FooterBlock from './layout/FooterBlock.svelte';
    import IndicatorBlock from './layout/IndicatorBlock.svelte';
    import JoinBlock from './layout/JoinBlock.svelte';
    import MaskBlock from './layout/MaskBlock.svelte';
    import StackBlock from './layout/StackBlock.svelte';
    import BrowserMockupBlock from './mockup/BrowserMockupBlock.svelte';
    import CodeMockupBlock from './mockup/CodeMockupBlock.svelte';
    import PhoneMockupBlock from './mockup/PhoneMockupBlock.svelte';
    import WindowMockupBlock from './mockup/WindowMockupBlock.svelte';

    /** @type {{ sections?: { type: string }[] }} */
    let { sections = [] } = $props();

    /** @type {Record<string, any>} */
    const registry = {
        hero: HeroBlock,
        intro: IntroBlock,
        cards: CardsBlock,
        card: CardBlock,
        cta_banner: CtaBannerBlock,
        text: TextBlock,
        badge: BadgeBlock,
        button: ButtonBlock,
        image: ImageBlock,
        alert: AlertBlock,
        loading: LoadingBlock,
        progress: ProgressBlock,
        radial_progress: RadialProgressBlock,
        skeleton: SkeletonBlock,
        toast: ToastBlock,
        tooltip: TooltipBlock,
        docs_layout: DocsLayoutBlock,
        heading: HeadingBlock,
        divider: DividerBlock,
        breadcrumb: BreadcrumbBlock,
        dock: DockBlock,
        link: LinkBlock,
        megamenu: MegamenuBlock,
        menu: MenuBlock,
        navbar: NavbarBlock,
        pagination: PaginationBlock,
        steps: StepsBlock,
        stat: StatBlock,
        table: TableBlock,
        accordion: AccordionBlock,
        avatar: AvatarBlock,
        aura: AuraBlock,
        carousel: CarouselBlock,
        chat_bubble: ChatBubbleBlock,
        collapse: CollapseBlock,
        countdown: CountdownBlock,
        diff: DiffBlock,
        hover_3d_card: Hover3DCardBlock,
        hover_gallery: HoverGalleryBlock,
        kbd: KbdBlock,
        list: ListBlock,
        status: StatusBlock,
        text_rotate: TextRotateBlock,
        timeline: TimelineBlock,
        tabs: TabsBlock,
        dropdown: DropdownBlock,
        fab: FabBlock,
        modal: ModalBlock,
        swap: SwapBlock,
        theme_controller: ThemeControllerBlock,
        calendar: CalendarBlock,
        checkbox: CheckboxBlock,
        fieldset: FieldsetBlock,
        file_input: FileInputBlock,
        filter: FilterBlock,
        label: LabelBlock,
        radio: RadioBlock,
        range: RangeBlock,
        rating: RatingBlock,
        select: SelectBlock,
        input_field: InputFieldBlock,
        textarea: TextareaBlock,
        toggle: ToggleBlock,
        validator: ValidatorBlock,
        otp: OtpBlock,
        drawer_sidebar: DrawerSidebarBlock,
        footer: FooterBlock,
        indicator: IndicatorBlock,
        join: JoinBlock,
        mask: MaskBlock,
        stack: StackBlock,
        mockup_browser: BrowserMockupBlock,
        mockup_code: CodeMockupBlock,
        mockup_phone: PhoneMockupBlock,
        mockup_window: WindowMockupBlock
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

---
title: Components Library
description: A living catalogue of the CMS-renderable blocks in Svelte Skeleton, organized using daisyUI's seven component categories.
show_in_menu: true
menu_order: 3
sections:
  - type: hero
    badge: Internal reference
    title: Components Library
    description: Browse the reusable interface blocks used by our IT services demos. The categories follow the daisyUI component guide.
  - type: intro
    title: How to read this page
    text: Use the category navigation to jump to an example. Each demo uses IT services content and is rendered from the same CMS block data used by site pages.
    image: ''
    layout:
      mode: flex
      direction: row
  - type: docs_layout
    sidebar:
      - label: Actions
        anchor: actions
        links:
          - { label: Button, anchor: action-button }
          - { label: Dropdown, anchor: action-dropdown }
          - { label: FAB / Speed Dial, anchor: action-fab }
          - { label: Modal, anchor: action-modal }
          - { label: Swap, anchor: action-swap }
          - { label: Theme Controller, anchor: action-theme-controller }
      - label: Data Display
        anchor: data-display
        links:
          - { label: Accordion, anchor: data-display-accordion }
          - { label: Avatar, anchor: data-display-avatar }
          - { label: Aura, anchor: data-display-aura }
          - { label: Badge, anchor: data-display-badge }
          - { label: Card, anchor: data-display-card }
          - { label: Carousel, anchor: data-display-carousel }
          - { label: Chat Bubble, anchor: data-display-chat-bubble }
          - { label: Collapse, anchor: data-display-collapse }
          - { label: Countdown, anchor: data-display-countdown }
          - { label: Diff, anchor: data-display-diff }
          - { label: Hover 3D Card, anchor: data-display-hover-3d-card }
          - { label: Hover Gallery, anchor: data-display-hover-gallery }
          - { label: Kbd, anchor: data-display-kbd }
          - { label: List, anchor: data-display-list }
          - { label: Stat, anchor: data-display-stat }
          - { label: Status, anchor: data-display-status }
          - { label: Table, anchor: data-display-table }
          - { label: Text Rotate, anchor: data-display-text-rotate }
          - { label: Timeline, anchor: data-display-timeline }
      - label: Navigation
        anchor: navigation
        links:
          - { label: Breadcrumbs, anchor: navigation-breadcrumbs }
          - { label: Dock, anchor: navigation-dock }
          - { label: Link, anchor: navigation-link }
          - { label: Megamenu, anchor: navigation-megamenu }
          - { label: Menu, anchor: navigation-menu }
          - { label: Navbar, anchor: navigation-navbar }
          - { label: Pagination, anchor: navigation-pagination }
          - { label: Steps, anchor: navigation-steps }
          - { label: Tab, anchor: navigation-tab }
      - label: Feedback
        anchor: feedback
        links:
          - { label: Alert, anchor: feedback-alert }
          - { label: Loading, anchor: feedback-loading }
          - { label: Progress, anchor: feedback-progress }
          - { label: Radial Progress, anchor: feedback-radial-progress }
          - { label: Skeleton, anchor: feedback-skeleton }
          - { label: Toast, anchor: feedback-toast }
          - { label: Tooltip, anchor: feedback-tooltip }
      - label: Data Input
        anchor: data-input
        links:
          - { label: Calendar, anchor: data-input-calendar }
          - { label: Checkbox, anchor: data-input-checkbox }
          - { label: Fieldset, anchor: data-input-fieldset }
          - { label: File Input, anchor: data-input-file-input }
          - { label: Filter, anchor: data-input-filter }
          - { label: Label, anchor: data-input-label }
          - { label: Radio, anchor: data-input-radio }
          - { label: Range, anchor: data-input-range }
          - { label: Rating, anchor: data-input-rating }
          - { label: Select, anchor: data-input-select }
          - { label: Input Field, anchor: data-input-input-field }
          - { label: Textarea, anchor: data-input-textarea }
          - { label: Toggle, anchor: data-input-toggle }
          - { label: Validator, anchor: data-input-validator }
          - { label: OTP, anchor: data-input-otp }
      - label: Layout
        anchor: layout
        links:
          - { label: Docs Layout, anchor: layout-docs-layout }
          - { label: Heading, anchor: layout-heading }
          - { label: Divider, anchor: layout-divider }
          - { label: Drawer Sidebar, anchor: layout-drawer-sidebar }
          - { label: Footer, anchor: layout-footer }
          - { label: Hero, anchor: layout-hero }
          - { label: Indicator, anchor: layout-indicator }
          - { label: Join, anchor: layout-join }
          - { label: Mask, anchor: layout-mask }
          - { label: Stack, anchor: layout-stack }
      - label: Mockup
        anchor: mockup
        links:
          - { label: Browser, anchor: mockup-browser }
          - { label: Code, anchor: mockup-code }
          - { label: Phone, anchor: mockup-phone }
          - { label: Window, anchor: mockup-window }
    children:
      - type: heading
        title: Actions
        anchor: actions
      - type: heading
        title: Button
        anchor: action-button
      - type: button
        text: Request a service review
        link: /about/
        variant: primary
        size: lg
        modifiers: [wide]
      - type: button
        text: View support plans
        link: /components/#data-display
        variant: secondary
        size: md
        modifiers: [outline]
      - type: button
        text: Provisioning in progress
        is_button: true
        variant: accent
        disabled: true
      - type: divider
      - type: heading
        title: Dropdown
        anchor: action-dropdown
      - type: dropdown
        label: Service tools
        position: end
        items:
          - { label: View service status, href: /about/ }
          - { label: Request a support review, href: /about/ }
          - { label: Read the operations guide, href: /components/ }
      - type: divider
      - type: heading
        title: FAB / Speed Dial
        anchor: action-fab
      - type: fab
        label: Open IT support shortcuts
        trigger: IT
        actions:
          - { label: Open support guide, text: G, href: /about/ }
          - { label: View component library, text: C, href: /components/ }
      - type: divider
      - type: heading
        title: Modal
        anchor: action-modal
      - type: modal
        trigger: View incident response details
        title: Incident response coverage
        content: Critical incidents are monitored around the clock. Our operations team acknowledges priority one alerts within 15 minutes and coordinates updates through resolution.
        close_label: Close details
      - type: divider
      - type: heading
        title: Swap
        anchor: action-swap
      - type: swap
        on_text: On-call coverage active
        off_text: On-call coverage paused
        accessible_label: Toggle on-call coverage preview
        style: rotate
      - type: divider
      - type: heading
        title: Theme Controller
        anchor: action-theme-controller
      - type: theme_controller
        label: Preview site themes
        options:
          - { label: Light, value: light }
          - { label: Dark, value: dark }
          - { label: Luxury, value: luxury }
          - { label: Emerald, value: emerald }
          - { label: Pastel, value: pastel }
      - type: divider

      - type: heading
        title: Data Display
        anchor: data-display
      - type: heading
        title: Accordion
        anchor: data-display-accordion
      - type: accordion
        items:
          - title: What does managed monitoring cover?
            content: Our operations team monitors cloud health, network availability, endpoint protection, and backup jobs around the clock.
          - title: How are incidents escalated?
            content: Priority one alerts route to the on-call engineer, with status updates shared until service is restored.
      - type: heading
        title: Avatar
        anchor: data-display-avatar
      - type: avatar
        name: Maya, Cloud Operations
        initials: MC
        size: lg
        status: online
      - type: heading
        title: Aura
        anchor: data-display-aura
      - type: aura
        eyebrow: Managed IT services
        title: Infrastructure built for uptime
        content: Cloud, network, and endpoint operations supported by one accountable team.
        style: rainbow
      - type: heading
        title: Badge
        anchor: data-display-badge
      - type: badge
        text: SLA protected
        style: primary
      - type: heading
        title: Card
        anchor: data-display-card
      - type: card
        title: Endpoint protection
        children:
          - type: text
            content: Managed detection, policy enforcement, and device health reporting for distributed teams.
          - type: badge
            text: 24/7 monitoring
            style: secondary
      - type: heading
        title: Carousel
        anchor: data-display-carousel
      - type: carousel
        label: IT service highlights
        items:
          - eyebrow: Cloud
            title: Cloud operations
            content: Health monitoring, cost visibility, and backup assurance.
          - eyebrow: Security
            title: Endpoint protection
            content: Device controls and threat response for every user.
          - eyebrow: Support
            title: Service desk
            content: Clear ownership from first report through resolution.
      - type: heading
        title: Chat Bubble
        anchor: data-display-chat-bubble
      - type: chat_bubble
        label: IT support conversation
        messages:
          - speaker: Alex, Support
            message: We detected packet loss on the Makassar office connection and are checking the carrier handoff.
            placement: start
            time: 09:14
          - speaker: Operations team
            message: Failover is active. We will confirm when the primary link is stable again.
            placement: end
            time: 09:16
            footer: Incident INC-2048
      - type: heading
        title: Collapse
        anchor: data-display-collapse
      - type: collapse
        title: What is included in the response SLA?
        content: Critical incidents are acknowledged within 15 minutes, assigned an incident lead, and tracked through restoration with regular stakeholder updates.
        icon: arrow
      - type: heading
        title: Countdown
        anchor: data-display-countdown
      - type: countdown
        value: 14
        title: Median response
        unit: minutes
        label: 14 minutes median response time
      - type: heading
        title: Diff
        anchor: data-display-diff
      - type: diff
        label: IT operations before and after managed monitoring
        before_label: Before
        before: Teams discover outages through user reports and react under pressure.
        after_label: With managed services
        after: Monitoring flags unusual activity early and routes alerts to the on-call team.
      - type: heading
        title: Hover 3D Card
        anchor: data-display-hover-3d-card
      - type: hover_3d_card
        eyebrow: Cloud resilience
        title: Recovery plans that are ready to run
        content: Backup checks and recovery exercises keep critical services prepared for disruption.
      - type: heading
        title: Hover Gallery
        anchor: data-display-hover-gallery
      - type: hover_gallery
        label: Infrastructure service gallery
        images:
          - src: /images/services/cloud-operations.svg
            alt: Cloud operations dashboard illustration
          - src: /images/services/security-operations.svg
            alt: Security operations illustration
          - src: /images/services/network-operations.svg
            alt: Network operations illustration
      - type: heading
        title: Kbd
        anchor: data-display-kbd
      - type: kbd
        instruction: Open the service desk console with
        keys: [Ctrl, Shift, S]
      - type: heading
        title: List
        anchor: data-display-list
      - type: list
        title: Active service coverage
        items:
          - title: Cloud monitoring
            description: APAC and EMEA regions
            status: Operational
          - title: Endpoint protection
            description: 1,248 managed devices
            status: Protected
          - title: Service desk
            description: Priority one response
            status: 24/7
      - type: heading
        title: Stat
        anchor: data-display-stat
      - type: stat
        title: Regional availability
        value: 99.95%
        description: Current month service level
        icon: Cloud
      - type: heading
        title: Status
        anchor: data-display-status
      - type: status
        text: All systems operational
        label: "Service status: operational"
        color: success
        size: md
      - type: heading
        title: Table
        anchor: data-display-table
      - type: table
        headers: [Service, Status, SLA]
        rows:
          - { service: Cloud monitoring, status: Operational, sla: 99.9% }
          - { service: Endpoint protection, status: Operational, sla: 24/7 }
          - { service: Help desk, status: Scheduled maintenance, sla: 30 min response }
        zebra: true
      - type: heading
        title: Text Rotate
        anchor: data-display-text-rotate
      - type: text_rotate
        prefix: We
        items: [monitor, secure, support]
        suffix: your IT operations
        duration: 9000
      - type: heading
        title: Timeline
        anchor: data-display-timeline
      - type: timeline
        orientation: vertical
        items:
          - date: 08:00
            title: Health checks completed
            description: Core cloud and network services passed scheduled checks.
          - date: 09:14
            title: Incident detected
            description: Automated monitoring flagged packet loss at the Makassar office.
          - date: 09:22
            title: Failover confirmed
            description: Traffic moved to the secondary link while the carrier investigates.
      - type: divider

      - type: heading
        title: Navigation
        anchor: navigation
      - type: heading
        title: Breadcrumbs
        anchor: navigation-breadcrumbs
      - type: breadcrumb
        links:
          - { label: Home, href: / }
          - { label: Managed services, href: /about/ }
          - { label: Cloud operations, href: /components/#data-display }
      - type: heading
        title: Dock
        anchor: navigation-dock
      - type: dock
        label: IT service shortcuts
        size: md
        items:
          - { label: Home, href: /, icon: H }
          - { label: Services, href: /about/, icon: S, active: true }
          - { label: Support, href: /contact/, icon: "?" }
      - type: heading
        title: Link
        anchor: navigation-link
      - type: link
        context: Review our
        label: managed support plans
        href: /about/
        suffix: to see service coverage and response targets.
        color: primary
        hover_only: false
      - type: heading
        title: Megamenu
        anchor: navigation-megamenu
      - type: megamenu
        label: Service areas
        groups:
          - label: Cloud services
            description: Reliable infrastructure operations for growing teams.
            links:
              - { label: Cloud monitoring, href: /about/ }
              - { label: Backup and recovery, href: /about/ }
          - label: Security
            description: Practical protection across endpoints and identity.
            links:
              - { label: Endpoint protection, href: /about/ }
              - { label: Incident response, href: /about/ }
          - label: Support
            description: Help desk coverage with clear escalation paths.
            links:
              - { label: Service desk, href: /contact/ }
              - { label: Response plans, href: /about/ }
      - type: heading
        title: Menu
        anchor: navigation-menu
      - type: menu
        label: Service navigation menu
        title: Solutions
        orientation: vertical
        size: md
        items:
          - label: Managed services
            href: /about/
            children:
              - { label: Cloud operations, href: /about/ }
              - { label: Security operations, href: /about/ }
          - { label: Service desk, href: /contact/ }
          - { label: Resource library, href: /components/ }
      - type: heading
        title: Navbar
        anchor: navigation-navbar
      - type: navbar
        label: Northstar IT main navigation
        brand: Northstar IT
        brand_href: /
        cta_label: Request a consultation
        cta_href: /contact/
        items:
          - { label: Services, href: /about/, active: true }
          - { label: Insights, href: /about/ }
          - { label: Contact, href: /contact/ }
      - type: heading
        title: Pagination
        anchor: navigation-pagination
      - type: pagination
        label: Service articles
        current: 1
        previous_href: /about/
        next_href: /about/
        pages:
          - { label: 1, href: /about/ }
          - { label: 2, href: /about/ }
          - { label: 3, href: /about/ }
      - type: heading
        title: Steps
        anchor: navigation-steps
      - type: steps
        orientation: horizontal
        current: 1
        items:
          - { label: Assess, description: Review the environment }
          - { label: Plan, description: Agree on priorities }
          - { label: Onboard, description: Prepare service coverage }
          - { label: Operate, description: Monitor and improve }
      - type: heading
        title: Tab
        anchor: navigation-tab
      - type: tabs
        style: boxed
        tabs:
          - label: Overview
            content: Our team monitors infrastructure health, capacity, and security signals from one operations console.
          - label: Coverage
            content: Support is available around the clock for critical incidents, with regional handoff across APAC and EMEA.
          - label: Reporting
            content: Monthly reports summarize uptime, incident response, patch compliance, and planned improvements.
      - type: divider

      - type: heading
        title: Feedback
        anchor: feedback
      - type: heading
        title: Alert
        anchor: feedback-alert
      - type: alert
        title: Scheduled maintenance
        text: Our cloud infrastructure will undergo routine maintenance this Sunday from 2 AM to 4 AM Makassar time. Expect minor latency in the APAC region.
        variant: warning
        icon: true
      - type: heading
        title: Loading
        anchor: feedback-loading
      - type: loading
        variant: dots
        size: lg
        label: Loading the cloud operations dashboard
        text: Loading cloud health data
      - type: heading
        title: Progress
        anchor: feedback-progress
      - type: progress
        value: 72
        label: Endpoint policy rollout
        color: primary
        show_value: true
      - type: heading
        title: Radial Progress
        anchor: feedback-radial-progress
      - type: radial_progress
        value: 86
        label: Monthly service availability
        size: 6rem
        thickness: 0.5rem
        color: success
      - type: heading
        title: Skeleton
        anchor: feedback-skeleton
      - type: skeleton
        variant: card
        label: Loading the service status card
      - type: heading
        title: Toast
        anchor: feedback-toast
      - type: toast
        title: Backup completed
        text: The nightly cloud backup finished successfully at 02:14 Makassar time.
        variant: success
        placement: bottom-end
      - type: heading
        title: Tooltip
        anchor: feedback-tooltip
      - type: tooltip
        tip: "Last successful health check: 09:42 Makassar time"
        label: Cloud health details
        placement: top
        color: info
      - type: divider

      - type: heading
        title: Data Input
        anchor: data-input
      - type: heading
        title: Calendar
        anchor: data-input-calendar
      - type: calendar
        label: Planned maintenance date
        value: '2026-11-08'
      - type: heading
        title: Checkbox
        anchor: data-input-checkbox
      - type: checkbox
        label: Include endpoint security review
        checked: true
        color: primary
      - type: heading
        title: Fieldset
        anchor: data-input-fieldset
      - type: fieldset
        legend: Service request details
        label: Service name
        placeholder: Cloud monitoring
        value: Cloud monitoring
        description: Choose the service this request concerns.
      - type: heading
        title: File Input
        anchor: data-input-file-input
      - type: file_input
        label: Attach diagnostic logs
        accept: .log,.txt,.zip
        multiple: true
      - type: heading
        title: Filter
        anchor: data-input-filter
      - type: filter
        label: Filter service areas
        options: [All, Cloud, Security, Support]
        selected: All
      - type: heading
        title: Label
        anchor: data-input-label
      - type: label
        label: Service owner email
        hint: Required for incident updates
        required: true
      - type: heading
        title: Radio
        anchor: data-input-radio
      - type: radio
        label: Select incident priority
        name: incident-priority
        options: [Standard, Priority, Critical]
        selected: Priority
        color: primary
      - type: heading
        title: Range
        anchor: data-input-range
      - type: range
        label: Monthly cloud capacity allocation
        min: 0
        max: 100
        value: 70
        step: 5
        color: primary
      - type: heading
        title: Rating
        anchor: data-input-rating
      - type: rating
        label: Rate the service desk response
        value: 4
        max: 5
        size: lg
      - type: heading
        title: Select
        anchor: data-input-select
      - type: select
        label: Requested service
        options: [Cloud monitoring, Endpoint protection, Service desk]
        value: Cloud monitoring
        size: md
      - type: heading
        title: Input Field
        anchor: data-input-input-field
      - type: input_field
        label: Work email
        input_type: email
        placeholder: name@company.com
        value: operations@example.com
        required: true
      - type: heading
        title: Textarea
        anchor: data-input-textarea
      - type: textarea
        label: Describe the incident
        placeholder: Include affected services and observed impact
        value: Intermittent connectivity is affecting the Makassar office.
        rows: 3
      - type: heading
        title: Toggle
        anchor: data-input-toggle
      - type: toggle
        label: Enable after-hours monitoring
        checked: true
        color: success
      - type: heading
        title: Validator
        anchor: data-input-validator
      - type: validator
        label: Contact email validation
        value: operations@example.com
        hint: Enter a valid work email address.
      - type: heading
        title: OTP
        anchor: data-input-otp
      - type: otp
        label: Enter the six-digit sign-in code
        digits: 6
      - type: divider

      - type: heading
        title: Layout
        anchor: layout
      - type: heading
        title: Docs Layout
        anchor: layout-docs-layout
      - type: text
        content: The documentation layout, category headings, and dividers organize these examples into a single browsable page.
      - type: heading
        title: Heading
        anchor: layout-heading
      - type: text
        content: Category and component titles are rendered by the reusable Heading block.
      - type: heading
        title: Divider
        anchor: layout-divider
      - type: divider
      - type: heading
        title: Drawer Sidebar
        anchor: layout-drawer-sidebar
      - type: drawer_sidebar
        label: Browse service areas
        title: Service navigation
        content: Open the service menu to browse managed IT coverage.
        side: start
        links:
          - { label: Cloud operations, href: /about/ }
          - { label: Security services, href: /about/ }
          - { label: Support desk, href: /contact/ }
      - type: heading
        title: Footer
        anchor: layout-footer
      - type: footer
        brand: Northstar IT
        description: Cloud, security, and support operations for distributed teams.
        copyright: '© 2026 Northstar IT. All rights reserved.'
        columns:
          - title: Services
            links:
              - { label: Cloud operations, href: /about/ }
              - { label: Endpoint security, href: /about/ }
          - title: Get support
            links:
              - { label: Contact the service desk, href: /contact/ }
      - type: heading
        title: Hero
        anchor: layout-hero
      - type: hero
        badge: Managed services
        title: IT operations that stay ahead
        description: Monitoring and support teams keep business services resilient around the clock.
        cta_text: Explore services
        cta_link: /about/
      - type: heading
        title: Indicator
        anchor: layout-indicator
      - type: indicator
        indicator: 3 alerts
        content: Open infrastructure alerts
        color: warning
        position: top-end
      - type: heading
        title: Join
        anchor: layout-join
      - type: join
        items: [Cloud, Security, Support]
        direction: horizontal
        style: button
      - type: heading
        title: Mask
        anchor: layout-mask
      - type: mask
        shape: squircle
        text: IT
        color: primary
      - type: heading
        title: Stack
        anchor: layout-stack
      - type: stack
        items: [Primary region, Secondary region, Recovery site]
        alignment: bottom

      - type: heading
        title: Mockup
        anchor: mockup
      - type: heading
        title: Browser
        anchor: mockup-browser
      - type: mockup_browser
        url: https://status.northstar.example
        content: All cloud and security services are operational.
      - type: heading
        title: Code
        anchor: mockup-code
      - type: mockup_code
        prefix: '$'
        lines:
          - npm run deploy:production
          - Checking health probes across 3 regions...
          - Production deployment complete
      - type: heading
        title: Phone
        anchor: mockup-phone
      - type: mockup_phone
        theme: dark
        content: On-call engineer notified. Incident INC-2048 is being investigated.
      - type: heading
        title: Window
        anchor: mockup-window
      - type: mockup_window
        title: Operations dashboard
        content: 99.95% availability this month. All regional monitors are active.
---

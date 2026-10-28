const services = [
    {
        title: 'Web Development',
        href: '/services/web-development',
        tagline: 'Websites, landing pages & upkeep',
        description: 'Build and maintain professional websites without hiring an in-house development team.'
    },
    {
        title: 'App Development',
        href: '/services/app-development',
        tagline: 'iOS, Android & cross-platform apps',
        description: 'Create fast, reliable mobile applications for iOS and Android with scalable cross-platform technology.'
    },
    {
        title: 'UI/UX & Graphic Design',
        href: '/services/ui-ux-graphic-design',
        tagline: 'Product interfaces & brand visuals',
        description: 'Design intuitive digital experiences and polished brand visuals that are clear, consistent, and easy to use.'
    },
    {
        title: 'AI Integrations',
        href: '/services/ai-integrations',
        tagline: 'AI assistants, automation & workflows',
        description: 'Connect practical AI tools with your products and workflows to automate tasks and improve customer experiences.'
    },
    {
        title: 'SEO & Content',
        href: '/services/seo-content',
        tagline: 'SEO content & AI search visibility',
        description: 'Create search-focused content and support your organic growth with ongoing SEO execution.'
    },
    {
        title: 'Lead Generation & Outbound Sales',
        href: '/services/lead-generation-outbound-sales',
        tagline: 'Prospect lists, outreach & meetings',
        description: 'Build prospect lists, manage outreach, and support your outbound sales process with dedicated specialists.'
    },
    {
        title: 'Social Media Management',
        href: '/services/social-media-management',
        tagline: 'Content calendars & daily posting',
        description: 'Keep your social channels active with consistent content, scheduling, and day-to-day management.'
    },
    {
        title: 'Email Marketing',
        href: '/services/email-marketing',
        tagline: 'Campaigns, automated flows & retention',
        description: 'Plan and execute email marketing campaigns and retention activities without adding another specialist to your team.'
    },
    {
        title: 'Digital Advertising',
        href: '/services/digital-advertising',
        tagline: 'Google & Meta ads management',
        description: 'Get support managing your Google and Meta advertising campaigns and the work that happens behind them.'
    }
]

// Homepage, navbar, and footer show services in these three groups.
export const serviceGroups = [
    {
        label: 'Development',
        title: 'Websites, Apps & AI',
        description: 'Websites, apps, and AI tools built and maintained by one managed team.',
        tools: [
            { src: '/images/service-react.svg', alt: 'React' },
            { src: '/images/service-figma.svg', alt: 'Figma' },
            { src: '/images/tool-openai.png', alt: 'OpenAI' },
        ],
        hrefs: ['/services/web-development', '/services/app-development', '/services/ai-integrations', '/services/ui-ux-graphic-design'],
    },
    {
        label: 'Marketing',
        title: 'Marketing & Content',
        description: 'Consistent marketing that keeps your business visible and top of mind.',
        tools: [
            { src: '/images/service-search-console.svg', alt: 'Search Console' },
            { src: '/images/service-meta.svg', alt: 'Meta' },
            { src: '/images/service-mailchimp.svg', alt: 'Mailchimp' },
        ],
        hrefs: ['/services/seo-content', '/services/social-media-management', '/services/email-marketing'],
    },
    {
        label: 'Sales',
        title: 'Sales & Advertising',
        description: 'Outreach and paid campaigns that bring qualified conversations to your sales team.',
        tools: [
            { src: '/images/tool-apollo.png', alt: 'Apollo' },
            { src: '/images/service-google-ads.svg', alt: 'Google Ads' },
            { src: '/images/tool-instantly.png', alt: 'Instantly' },
        ],
        hrefs: ['/services/lead-generation-outbound-sales', '/services/digital-advertising'],
    },
].map(group => ({ ...group, services: group.hrefs.map(href => services.find(service => service.href === href)) }))

export default services;


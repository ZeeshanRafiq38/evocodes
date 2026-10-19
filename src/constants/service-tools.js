const svg = (name, alt) => ({ src: `/images/service-${name}.svg`, alt })
const png = (name, alt) => ({ src: `/images/tool-${name}.png`, alt })

const serviceTools = {
    'Web Development': [svg('react', 'React'), svg('nextjs', 'Next.js'), svg('wordpress', 'WordPress')],
    'App Development': [svg('flutter', 'Flutter'), svg('react', 'React Native'), svg('swift', 'Swift')],
    'UI/UX & Graphic Design': [svg('figma', 'Figma'), png('canva', 'Canva'), svg('framer', 'Framer')],
    'AI Integrations': [png('openai', 'OpenAI'), png('claude', 'Claude'), svg('gemini', 'Gemini')],
    'SEO & Content': [svg('search-console', 'Search Console'), svg('google-analytics', 'Google Analytics'), svg('semrush', 'Semrush')],
    'Lead Generation & Outbound Sales': [png('apollo', 'Apollo'), png('instantly', 'Instantly'), png('clay', 'Clay')],
    'Social Media Management': [svg('meta', 'Meta'), png('buffer', 'Buffer'), png('canva', 'Canva')],
    'Email Marketing': [png('klaviyo', 'Klaviyo'), svg('mailchimp', 'Mailchimp'), png('omnisend', 'Omnisend')],
    'Digital Advertising': [svg('google-ads', 'Google Ads'), svg('meta', 'Meta Ads'), svg('tiktok', 'TikTok Ads')]
}

export default serviceTools

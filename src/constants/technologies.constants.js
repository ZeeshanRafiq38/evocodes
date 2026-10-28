const svg = (name, label) => ({ src: `/images/service-${name}.svg`, label })
const png = (name, label) => ({ src: `/images/tool-${name}.png`, label })

const technologies = {
    build: [
        svg('react', 'React'), svg('nextjs', 'Next.js'), svg('wordpress', 'WordPress'), svg('flutter', 'Flutter'),
        svg('swift', 'Swift'), svg('kotlin', 'Kotlin'), svg('figma', 'Figma'), svg('framer', 'Framer'),
        png('photoshop', 'Photoshop'), png('openai', 'OpenAI'), png('claude', 'Claude'),
        svg('gemini', 'Gemini'), svg('hugging-face', 'Hugging Face'),
    ],
    grow: [
        svg('google-ads', 'Google Ads'), svg('meta', 'Meta Ads'), svg('google-analytics', 'Google Analytics'),
        svg('search-console', 'Search Console'), svg('semrush', 'Semrush'), svg('hubspot', 'HubSpot'),
        png('klaviyo', 'Klaviyo'), png('omnisend', 'Omnisend'), svg('mailchimp', 'Mailchimp'), svg('brevo', 'Brevo'),
        png('apollo', 'Apollo'), png('instantly', 'Instantly'), png('clay', 'Clay'), png('buffer', 'Buffer'),
        png('canva', 'Canva'),
    ],
}

export default technologies;

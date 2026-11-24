// Picks "related articles" for a blog page and the service page it belongs to.
//
// SEO idea (topic clusters): every blog belongs to one topic. Blogs link to other
// blogs in the same topic and to that topic's service page (the pillar), so
// Google sees each service as a group of connected pages.
//
// To add a new topic or improve matching, edit `blogTopics` only.

// Keywords are matched as whole words/phrases (case-insensitive) against the blog's
// tags, title and short description. Order matters only for ties.
export const blogTopics = [
    {
        href: '/services/web-development-outsourcing',
        keywords: ['web development', 'website', 'websites', 'web design', 'landing page', 'landing pages', 'wordpress', 'shopify', 'webflow', 'next.js', 'nextjs', 'react', 'frontend', 'front-end', 'backend', 'back-end', 'web app', 'web application', 'developer', 'developers'],
    },
    {
        href: '/services/app-development',
        keywords: ['app development', 'mobile app', 'mobile apps', 'ios', 'android', 'flutter', 'react native', 'cross-platform', 'app store'],
    },
    {
        href: '/services/ui-ux-graphic-design',
        keywords: ['ui/ux', 'ui ux', 'ux', 'ui design', 'ux design', 'user experience', 'graphic design', 'graphic designer', 'branding', 'brand identity', 'logo', 'figma', 'design system'],
    },
    {
        href: '/services/ai-integrations',
        keywords: ['ai', 'artificial intelligence', 'ai integration', 'ai integrations', 'chatbot', 'chatbots', 'ai agent', 'ai agents', 'automation', 'workflow automation', 'machine learning', 'llm', 'chatgpt', 'openai', 'gpt'],
    },
    {
        href: '/services/seo-outsourcing',
        keywords: ['seo', 'search engine optimization', 'white label seo', 'link building', 'backlinks', 'keyword research', 'local seo', 'technical seo', 'geo', 'aeo', 'organic traffic', 'google ranking', 'content marketing'],
    },
    {
        href: '/services/lead-generation-outbound-sales',
        keywords: ['lead generation', 'leads', 'outbound', 'outbound sales', 'cold email', 'cold outreach', 'prospecting', 'appointment setting', 'sdr', 'b2b sales', 'sales pipeline'],
    },
    {
        href: '/services/social-media-management',
        keywords: ['social media', 'social media management', 'social media marketing', 'instagram', 'facebook', 'linkedin', 'tiktok', 'content calendar'],
    },
    {
        href: '/services/email-marketing',
        keywords: ['email marketing', 'newsletter', 'newsletters', 'email campaign', 'email campaigns', 'email automation', 'drip campaign', 'klaviyo', 'mailchimp'],
    },
    {
        href: '/services/digital-advertising',
        keywords: ['digital advertising', 'ppc', 'pay per click', 'google ads', 'meta ads', 'facebook ads', 'paid ads', 'paid media', 'paid social', 'ad campaign', 'ad campaigns', 'media buying'],
    },
    // General outsourcing articles: grouped together, no single service page.
    {
        href: null,
        keywords: ['outsourcing', 'outsource', 'business process outsourcing', 'bpo', 'hiring', 'in-house', 'freelancers'],
    },
]

const STOP_WORDS = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'how', 'in', 'is', 'it', 'of', 'on', 'or', 'the', 'to', 'vs', 'what', 'when', 'why', 'with', 'your', 'you', 'our', 'we', 'do', 'does', 'can', 'guide', 'best', 'top', 'complete', 'instead'])

const escape = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const keywordPatterns = blogTopics.map(topic => topic.keywords.map(keyword => new RegExp(`(^|[^a-z0-9])${escape(keyword)}(?=$|[^a-z0-9])`, 'i')))

const lower = value => String(value || '').toLowerCase()
const asList = value => (Array.isArray(value) ? value : []).filter(item => typeof item === 'string')
const tagText = blog => [...asList(blog?.tags), ...asList(blog?.metaTags)].map(lower).join(' | ')

// Index into `blogTopics` of the blog's best-matching topic, or -1.
// Tags count most, then the title, then the short description.
// A service topic always wins over the general one, so "SEO outsourcing"
// belongs to SEO even though it also says "outsourcing".
export const getBlogTopic = blog => {
    const fields = [[tagText(blog), 3], [lower(blog?.title), 2], [lower(blog?.shortDescription), 1]]
    const scores = keywordPatterns.map(patterns => patterns.reduce((sum, pattern) => sum + fields.reduce((acc, [text, weight]) => acc + (pattern.test(text) ? weight : 0), 0), 0))
    const pick = indexes => indexes.reduce((best, index) => (scores[index] > (best === -1 ? 0 : scores[best]) ? index : best), -1)
    const serviceIndexes = blogTopics.map((topic, index) => (topic.href ? index : -1)).filter(index => index !== -1)
    const generalIndexes = blogTopics.map((topic, index) => (topic.href ? -1 : index)).filter(index => index !== -1)
    const service = pick(serviceIndexes)
    // Needs a hit in the tags or title; a passing mention in the description isn't enough.
    return service !== -1 && scores[service] >= 2 ? service : pick(generalIndexes)
}

// Service page (href) a blog belongs to, or null for general articles.
export const getBlogServiceHref = blog => {
    const topic = getBlogTopic(blog)
    return topic === -1 ? null : blogTopics[topic].href
}

const words = blog => new Set(
    `${tagText(blog)} ${lower(blog?.title)}`
        .split(/[^a-z0-9]+/)
        .filter(word => word.length > 2 && !STOP_WORDS.has(word))
)

const time = blog => new Date(blog?.createdAt || 0).getTime() || 0

// Up to `limit` blogs most related to `current`.
// Same topic first, then shared words (rare words count more than common ones,
// so "outsourcing" on every post doesn't make everything look related),
// then newest. Blogs the API already marked as related are kept at the top.
export const pickRelatedBlogs = (current, allBlogs = [], apiRelated = [], limit = 3) => {
    const seen = new Set([current?.slug])
    const pool = [...(apiRelated || []), ...(allBlogs || [])].filter(blog => {
        if (!blog?.slug || seen.has(blog.slug) || blog.published === false) return false
        seen.add(blog.slug)
        return true
    })
    if (!pool.length) return []

    const apiSlugs = new Set((apiRelated || []).map(blog => blog?.slug))
    const currentTopic = getBlogTopic(current)
    const currentWords = words(current)

    // How many blogs use each word; rarer shared words are stronger signals.
    const documents = [current, ...pool].map(words)
    const frequency = new Map()
    documents.forEach(set => set.forEach(word => frequency.set(word, (frequency.get(word) || 0) + 1)))
    const weight = word => Math.log(documents.length / frequency.get(word))

    const scored = pool.map(blog => {
        let score = 0
        if (apiSlugs.has(blog.slug)) score += 100
        if (currentTopic !== -1 && getBlogTopic(blog) === currentTopic) score += 10
        words(blog).forEach(word => {
            if (currentWords.has(word)) score += weight(word)
        })
        return { blog, score }
    })

    return scored
        .sort((a, b) => b.score - a.score || time(b.blog) - time(a.blog))
        .slice(0, limit)
        .map(item => item.blog)
}

import services from '@/constants/services.constants'

const siteUrl = 'https://vaforus.com'

export const revalidate = 3600

async function getDocuments(resource) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    if (!apiUrl) throw new Error('NEXT_PUBLIC_API_URL is required to generate the sitemap')

    const documents = []
    let page = 1
    let pages = 1

    do {
        const url = new URL(`${apiUrl.replace(/\/$/, '')}/api/${resource}`)
        url.searchParams.set('page', String(page))
        const response = await fetch(url, {
            next: { revalidate: 3600 },
            signal: AbortSignal.timeout(15000),
        })
        if (!response.ok) throw new Error(`Sitemap could not fetch ${resource}: ${response.status}`)

        const payload = await response.json()
        const data = payload.data
        if (!Array.isArray(data?.docs)) throw new Error(`Invalid sitemap response for ${resource}`)

        documents.push(...data.docs)
        pages = Number(data.pages) || 1
        page += 1
    } while (page <= pages)

    return documents
}

function documentEntries(documents, path) {
    return documents.filter(document => typeof document.slug === 'string' && document.slug.trim()).map(document => {
        const entry = { url: `${siteUrl}/${path}/${encodeURIComponent(document.slug)}` }
        const updated = document.updatedAt || document.createdAt
        if (updated && !Number.isNaN(new Date(updated).getTime())) {
            entry.lastModified = new Date(updated)
        }
        return entry
    })
}

export default async function sitemap() {
    const [blogs, locations] = await Promise.all([
        getDocuments('blog'),
        getDocuments('location'),
    ])

    const entries = [
        ...['/', '/about-us', '/blogs', '/locations', '/privacy-policy', '/terms', ...services.map(service => service.href)]
            .map(path => ({ url: `${siteUrl}${path}` })),
        ...documentEntries(blogs.filter(blog => blog.published !== false), 'blogs'),
        ...documentEntries(locations, 'locations'),
    ]

    return [...new Map(entries.map(entry => [entry.url, entry])).values()]
}

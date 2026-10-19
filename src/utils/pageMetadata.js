export default function pageMetadata(title, description, path) {
    const url = `https://vaforus.com${path}`
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, siteName: 'Vaforus', type: 'website' },
        twitter: { card: 'summary', title, description }
    }
}

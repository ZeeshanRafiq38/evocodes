import { notFound } from 'next/navigation'
import ServicePage from '@/components/services/ServicePage'
import servicePages from '@/constants/service-pages'
import pageMetadata from '@/utils/pageMetadata'

export const dynamicParams = false

export function generateStaticParams() {
    return Object.keys(servicePages).map(slug => ({ slug }))
}

export function generateMetadata({ params }) {
    const service = servicePages[params.slug]
    if (!service) notFound()
    return pageMetadata(service.seoTitle, service.description, `/services/${params.slug}`)
}

export default function ServiceDetailPage({ params }) {
    const service = servicePages[params.slug]
    if (!service) notFound()
    return <ServicePage service={service} href={`/services/${params.slug}`} />
}

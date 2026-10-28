import Link from 'next/link'

// Shared shell for policy pages: title band, "last updated" line, contents list, then the sections.
export default function LegalPage({ title, intro, updated, sections }) {
    return (
        <div>
            <header className='listing-header bg-secondary bg-[image:var(--section-gradient)] text-center text-pure'>
                <nav aria-label='Breadcrumb' className='text-sm text-gray-300 mb-6'>
                    <Link href='/' className='underline underline-offset-4 hover:text-white'>Home</Link>
                    <span aria-hidden='true' className='mx-3'>/</span>
                    <span aria-current='page'>{title}</span>
                </nav>
                <h1 className='page-title'>{title}</h1>
                <p className='page-intro'>{intro}</p>
                <p className='mt-4 text-sm text-gray-300'>Last updated: {updated}</p>
            </header>

            <div className='container mx-auto px-5 py-12 md:py-20 grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16'>
                <nav aria-label='On this page' className='lg:sticky lg:top-28 self-start'>
                    <p className='text-xs font-semibold uppercase tracking-[.08em] text-light'>On this page</p>
                    <ol className='mt-3 space-y-1 text-sm'>
                        {sections.map(section => (
                            <li key={section.id}>
                                <a href={`#${section.id}`} className='block py-1.5 text-dark hover:text-primary transition-colors'>{section.title}</a>
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className='legal-prose min-w-0 max-w-3xl'>
                    {sections.map(section => (
                        <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                            <h2 id={`${section.id}-title`}>{section.title}</h2>
                            {section.content}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}

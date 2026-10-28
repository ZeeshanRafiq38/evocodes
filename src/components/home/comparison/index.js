import SlideOnScroll from '@/components/global/SlideOnScroll'
import { comparison } from '@/constants/trust.constants'

const marks = {
    true: { label: 'Advantage', className: 'bg-[rgba(22,163,74,0.12)] text-green-700', path: 'M3 8.5 6.5 12 13 4.5' },
    false: { label: 'Drawback', className: 'bg-gray-100 text-gray-400', path: 'M4.5 4.5l7 7M11.5 4.5l-7 7' },
    null: { label: 'Depends', className: 'bg-[rgba(233,180,76,0.18)] text-amber-700', path: 'M4 8h8' },
}

const Mark = ({ value }) => {
    const mark = marks[String(value)]
    return (
        <span className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center ${mark.className}`}>
            <svg aria-hidden='true' viewBox='0 0 16 16' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' className='w-3.5 h-3.5'>
                <path d={mark.path} />
            </svg>
            <span className='sr-only'>{mark.label}:</span>
        </span>
    )
}

const Comparison = () => {
    const last = comparison.columns.length - 1

    return (
        <div className='section px-5 bg-[#F3F6F7]'>
            <div className='container mx-auto'>
                <SlideOnScroll direction='bottom'>
                    <header className='text-center'>
                        <p className='home-eyebrow mb-4'>Compare your options</p>
                        <h2 className='section-heading mx-auto'>Freelancers, In&#8209;House, or Vaforus?</h2>
                        <p className='sub-text'>Each option has its place. Here is how they compare for businesses that need work done across several areas.</p>
                    </header>
                </SlideOnScroll>

                {/* Phones: one card per option, Vaforus first, so the key column is never off-screen. */}
                <ul className='mt-10 space-y-4 md:hidden'>
                    {[last, ...comparison.columns.map((_, i) => i).filter(i => i !== last)].map(col => {
                        const highlight = col === last
                        return (
                            <li key={comparison.columns[col]} className={`relative rounded-2xl border p-5 ${highlight ? 'border-secondary bg-[rgba(248,237,231,0.7)]' : 'border-gray-200 bg-white'}`}>
                                <h3 className={`font-clash text-xl font-semibold ${highlight ? 'text-primary-hover' : 'text-secondary'}`}>{comparison.columns[col]}</h3>
                                <dl className='mt-4 divide-y divide-gray-200'>
                                    {comparison.rows.map(row => (
                                        <div key={row.label} className='py-3 flex items-start gap-3'>
                                            <Mark value={row.cells[col].value} />
                                            <div className='min-w-0'>
                                                <dt className='text-xs font-semibold uppercase tracking-[.06em] text-light'>{row.label}</dt>
                                                <dd className={`mt-0.5 text-[15px] leading-snug ${highlight ? 'font-medium text-secondary' : 'text-gray-600'}`}>{row.cells[col].text}</dd>
                                            </div>
                                        </div>
                                    ))}
                                </dl>
                            </li>
                        )
                    })}
                </ul>

                <SlideOnScroll direction='bottom' delay={0.1} className='hidden md:block'>
                    <div className='relative mt-12 overflow-x-auto rounded-2xl border border-gray-200 bg-white'>
                        <table className='w-full min-w-[720px] text-left'>
                            <caption className='sr-only'>Comparison of freelancers, an in-house hire, and Vaforus</caption>
                            <thead>
                                <tr className='border-b border-gray-200'>
                                    <th scope='col' className='p-5 w-[28%] text-sm font-semibold text-light'>&nbsp;</th>
                                    {comparison.columns.map((column, index) => (
                                        <th key={column} scope='col' className={`p-5 font-clash text-lg font-semibold ${index === last ? 'bg-secondary text-white' : 'text-secondary'}`}>
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.rows.map(row => (
                                    <tr key={row.label} className='border-b border-gray-100 last:border-0'>
                                        <th scope='row' className='p-5 text-[15px] font-semibold text-secondary align-top'>{row.label}</th>
                                        {row.cells.map((cell, index) => (
                                            <td key={index} className={`p-5 align-top ${index === last ? 'bg-[rgba(248,237,231,0.7)]' : ''}`}>
                                                <span className='flex items-start gap-3'>
                                                    <Mark value={cell.value} />
                                                    <span className={`text-[15px] leading-snug ${index === last ? 'font-medium text-secondary' : 'text-gray-600'}`}>{cell.text}</span>
                                                </span>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </SlideOnScroll>
            </div>
        </div>
    )
}

export default Comparison

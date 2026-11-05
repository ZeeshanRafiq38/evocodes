'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import services from '@/constants/services.constants'
import Axios from '@/config/api'

const MESSAGE_MAX = 1000

const titlesFor = hrefs => hrefs.map(href => services.find(service => service.href === href).title)
const serviceChipGroups = [
    { label: 'Development & Design', titles: titlesFor(['/services/web-development', '/services/app-development', '/services/ui-ux-graphic-design', '/services/ai-integrations']) },
    { label: 'Marketing & Sales', titles: titlesFor(['/services/seo-content', '/services/lead-generation-outbound-sales', '/services/social-media-management', '/services/email-marketing', '/services/digital-advertising']) },
]

const Check = ({ className }) => (
    <svg aria-hidden='true' viewBox='0 0 16 16' fill='none' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round' className={className}>
        <path d='M3 8.5 6.5 12 13 4.5' />
    </svg>
)

const emptyForm = { name: '', email: '', company: '', services: [], message: '', consent: false, website: '' }

const fieldClass = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-base text-secondary placeholder:text-gray-400 transition-[border-color,box-shadow] duration-200 outline-none focus-visible:outline-none focus:border-primary focus:ring-4 focus:ring-[rgba(196,81,34,0.12)] ${hasError ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'}`

const Label = ({ htmlFor, children, optional }) => (
    <label htmlFor={htmlFor} className='mb-2 flex items-center justify-between text-sm font-medium text-secondary'>
        <span>{children}{!optional && <span aria-hidden='true' className='text-primary'> *</span>}</span>
        {optional && <span className='text-xs font-normal text-light'>Optional</span>}
    </label>
)

const ErrorText = ({ id, message }) => message ? <p id={id} className='mt-1.5 text-sm text-red-600'>{message}</p> : null

const validate = form => {
    const errors = {}
    if (!form.name.trim()) errors.name = 'Please enter your name.'
    if (!form.email.trim()) errors.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.'
    if (!form.services.length) errors.services = 'Choose at least one option.'
    if (!form.message.trim()) errors.message = 'Please tell us a little about what you need.'
    if (!form.consent) errors.consent = 'Please agree to the Privacy Policy.'
    return errors
}

const submitContact = async (form, requestId) => {
    const response = await Axios.post('/contact', { ...form, requestId }, { timeout: 20000 })
    if (!response.data?.success) throw new Error('We could not confirm your submission. Please try again.')
}

export default function ContactForm() {
    const [form, setForm] = useState(emptyForm)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle') // idle | sending | success | error
    const [errorMessage, setErrorMessage] = useState('')
    const requestId = useRef(null)
    const submitting = useRef(false)

    const update = (key, value) => {
        if (submitting.current) return
        requestId.current = null
        setForm(current => ({ ...current, [key]: value }))
        if (errors[key]) setErrors(current => ({ ...current, [key]: undefined }))
    }

    const toggleService = title =>
        update('services', form.services.includes(title) ? form.services.filter(item => item !== title) : [...form.services, title])

    const onSubmit = async event => {
        event.preventDefault()
        if (submitting.current) return
        const found = validate(form)
        setErrors(found)
        if (Object.keys(found).length) {
            document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus()
            return
        }
        submitting.current = true
        setStatus('sending')
        setErrorMessage('')
        try {
            requestId.current ||= crypto.randomUUID()
            await submitContact(form, requestId.current)
            setStatus('success')
        } catch (error) {
            const data = error.response?.data
            if (data?.errors) setErrors(data.errors)
            setErrorMessage(data?.message || data?.data?.message || 'We could not confirm your submission. Please try again, or email us directly.')
            setStatus('error')
        } finally { submitting.current = false }
    }

    if (status === 'success') {
        return (
            <div role='status' className='flex flex-col items-center justify-center text-center py-16 px-4'>
                <span aria-hidden='true' className='w-16 h-16 rounded-full bg-[image:var(--primary-gradient)] text-white flex items-center justify-center shadow-[0_10px_24px_rgba(196,81,34,0.3)]'>
                    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round' className='w-8 h-8'>
                        <path d='M5 12.5 10 17.5 19 7' />
                    </svg>
                </span>
                <h2 className='mt-6 font-clash text-2xl sm:text-3xl font-semibold text-secondary'>Thanks, {form.name.split(' ')[0]}!</h2>
                <p className='mt-3 max-w-md text-base leading-relaxed text-gray-600'>
                    Your message has been received. We&apos;ll review it and get back to you within 24 hours at <span className='font-medium text-secondary break-all'>{form.email}</span>.
                </p>
                <button type='button' onClick={() => { setForm(emptyForm); setStatus('idle'); requestId.current = null }} className='mt-8 text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-hover'>
                    Send another message
                </button>
            </div>
        )
    }

    const sending = status === 'sending'

    return (
        <form onSubmit={onSubmit} noValidate aria-busy={sending} className='space-y-6'>
            <div aria-hidden='true' style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
                <label htmlFor='contact-website'>Leave this field empty</label>
                <input id='contact-website' name='website' type='text' tabIndex={-1} autoComplete='off' value={form.website} onChange={e => update('website', e.target.value)} />
            </div>
            <div className='grid gap-6 sm:grid-cols-2'>
                <div>
                    <Label htmlFor='contact-name'>Full name</Label>
                    <input id='contact-name' type='text' maxLength={100} disabled={sending} autoComplete='name' value={form.name} onChange={e => update('name', e.target.value)}
                        aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        placeholder='Your name' className={fieldClass(errors.name)} />
                    <ErrorText id='contact-name-error' message={errors.name} />
                </div>
                <div>
                    <Label htmlFor='contact-email'>Email</Label>
                    <input id='contact-email' type='email' maxLength={254} disabled={sending} autoComplete='email' value={form.email} onChange={e => update('email', e.target.value)}
                        aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        placeholder='you@company.com' className={fieldClass(errors.email)} />
                    <ErrorText id='contact-email-error' message={errors.email} />
                </div>
                <div className='sm:col-span-2'>
                    <Label htmlFor='contact-company' optional>Company name</Label>
                    <input id='contact-company' type='text' maxLength={150} disabled={sending} autoComplete='organization' value={form.company} onChange={e => update('company', e.target.value)}
                        aria-invalid={!!errors.company} aria-describedby={errors.company ? 'contact-company-error' : undefined}
                        placeholder='Company or brand' className={fieldClass(errors.company)} />
                    <ErrorText id='contact-company-error' message={errors.company} />
                </div>
            </div>

            <fieldset disabled={sending} aria-describedby={errors.services ? 'contact-services-error' : undefined}>
                <legend className='mb-3 text-sm font-medium text-secondary'>
                    What can we help with?<span aria-hidden='true' className='text-primary'> *</span>
                    <span className='ml-2 text-xs font-normal text-light'>Choose all that apply</span>
                </legend>
                <div className='space-y-4 rounded-xl border border-gray-100 bg-gray-50/70 p-4'>
                    {serviceChipGroups.map((group, groupIndex) => (
                        <div key={group.label}>
                            <p className='mb-2 text-[11px] font-semibold uppercase tracking-[.08em] text-light'>{group.label}</p>
                            <div className='flex flex-wrap gap-2'>
                                {group.titles.map((title, index) => {
                                    const selected = form.services.includes(title)
                                    return (
                                        <button key={title} type='button' id={groupIndex === 0 && index === 0 ? 'contact-services' : undefined} aria-pressed={selected} onClick={() => toggleService(title)}
                                            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] sm:text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${selected ? 'border-primary bg-primary-soft text-primary-hover' : 'border-gray-200 bg-white text-dark hover:border-primary hover:text-primary'}`}>
                                            {selected && <Check className='w-3.5 h-3.5' />}
                                            {title}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                <ErrorText id='contact-services-error' message={errors.services} />
            </fieldset>

            <div>
                <Label htmlFor='contact-message'>Message</Label>
                <textarea id='contact-message' rows={5} disabled={sending} maxLength={MESSAGE_MAX} value={form.message} onChange={e => update('message', e.target.value)}
                    aria-invalid={!!errors.message} aria-describedby={errors.message ? 'contact-message-error contact-message-hint' : 'contact-message-hint'}
                    placeholder='Tell us about your business, the work you want to outsource, and any timelines.'
                    className={`${fieldClass(errors.message)} resize-y min-h-[140px]`} />
                <div className='mt-1.5 flex items-start justify-between gap-4'>
                    <ErrorText id='contact-message-error' message={errors.message} />
                    {!errors.message && <p id='contact-message-hint' className='text-sm text-light'>The more detail you share, the better we can help.</p>}
                    <span aria-live='polite' className={`ml-auto shrink-0 text-xs tabular-nums ${form.message.length > MESSAGE_MAX * 0.9 ? 'text-primary' : 'text-light'}`}>{form.message.length}/{MESSAGE_MAX}</span>
                </div>
            </div>

            <div>
                <label className='flex items-start gap-3 text-sm leading-relaxed text-dark cursor-pointer'>
                    <span className='relative mt-0.5 h-5 w-5 shrink-0'>
                        <input id='contact-consent' type='checkbox' disabled={sending} checked={form.consent} onChange={e => update('consent', e.target.checked)}
                            aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
                            className={`peer h-5 w-5 appearance-none rounded-md border-2 bg-white cursor-pointer transition-colors checked:border-primary checked:bg-[image:var(--primary-gradient)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${errors.consent ? 'border-red-400' : 'border-gray-300 hover:border-primary'}`} />
                        <Check className='pointer-events-none absolute inset-0 m-auto w-3 h-3 text-white opacity-0 peer-checked:opacity-100' />
                    </span>
                    <span>
                        I agree to Vaforus storing my details to respond to this enquiry, as described in the{' '}
                        <Link href='/privacy-policy' className='font-medium text-primary underline underline-offset-2'>Privacy Policy</Link>.
                    </span>
                </label>
                <ErrorText id='contact-consent-error' message={errors.consent} />
            </div>

            {status === 'error' && (
                <p role='alert' className='rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>
                    {errorMessage}
                </p>
            )}

            <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6'>
            <button type='submit' disabled={sending} className='btn-primary w-full sm:w-auto gap-2 px-8 py-4 text-base font-medium disabled:opacity-70'>
                {sending && (
                    <svg aria-hidden='true' viewBox='0 0 24 24' className='w-4 h-4 animate-spin' fill='none'>
                        <circle cx='12' cy='12' r='9' stroke='currentColor' strokeOpacity='0.3' strokeWidth='3' />
                        <path d='M21 12a9 9 0 0 0-9-9' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
                    </svg>
                )}
                {sending ? 'Sending…' : 'Send message'}
            </button>
            <p className='flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-light'>
                <span className='inline-flex items-center gap-1.5'><Check className='w-4 h-4 text-primary' />We reply within 24 hours</span>
                <span className='inline-flex items-center gap-1.5'><Check className='w-4 h-4 text-primary' />Your details stay private</span>
            </p>
            </div>
        </form>
    )
}

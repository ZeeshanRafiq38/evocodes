import LegalPage from '@/components/legal/LegalPage'
import CookieSettingsButton from '@/components/legal/CookieSettingsButton'
import app from '@/constants/app.constants'
import pageMetadata from '@/utils/pageMetadata'

export const metadata = pageMetadata(
    'Privacy Policy | Vaforus',
    'How Vaforus collects, uses, and protects personal information when you visit our website or contact us about our services.',
    '/privacy-policy'
)

const email = <a href={`mailto:${app.email}`}>{app.email}</a>

const sections = [
    {
        id: 'who-we-are',
        title: 'Who we are',
        content: (
            <>
                <p>This policy explains how Vaforus (&ldquo;Vaforus&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal information when you visit vaforus.com, book a call, or contact us about our outsourcing and remote team services.</p>
                <p>For any privacy question or request, contact us at {email}.</p>
            </>
        ),
    },
    {
        id: 'information-we-collect',
        title: 'Information we collect',
        content: (
            <>
                <h3>Information you give us</h3>
                <ul>
                    <li><strong>Call bookings:</strong> your name, email address, and any answers you provide when you book a discovery call through Calendly.</li>
                    <li><strong>Messages:</strong> the content of emails, WhatsApp messages, or calls you send us, along with your contact details.</li>
                    <li><strong>Client work:</strong> business information you share with us while we discuss or deliver a project.</li>
                </ul>
                <h3>Information collected automatically</h3>
                <ul>
                    <li><strong>Analytics:</strong> if you accept analytics cookies, Google Analytics collects information such as pages visited, time on site, approximate location, device, and browser.</li>
                    <li><strong>Technical data:</strong> our hosting providers process standard server information, such as IP addresses, to deliver the website securely.</li>
                </ul>
                <p>We do not ask for sensitive information, and we ask that you do not send it to us.</p>
            </>
        ),
    },
    {
        id: 'how-we-use',
        title: 'How we use your information',
        content: (
            <ul>
                <li>To respond to enquiries and hold the discovery calls you book.</li>
                <li>To prepare proposals and deliver services you engage us for.</li>
                <li>To understand how visitors use our website so we can improve it, only where you have accepted analytics cookies.</li>
                <li>To keep our website secure and meet our legal obligations.</li>
            </ul>
        ),
    },
    {
        id: 'legal-basis',
        title: 'Legal basis for processing',
        content: (
            <>
                <p>If you are in the UK, European Economic Area, or another region with similar laws, we rely on the following legal bases:</p>
                <ul>
                    <li><strong>Consent</strong> for analytics cookies. You can withdraw it at any time.</li>
                    <li><strong>Steps before a contract, and performing a contract,</strong> when you book a call or engage our services.</li>
                    <li><strong>Legitimate interests</strong> in responding to business enquiries and keeping our website secure.</li>
                    <li><strong>Legal obligation</strong> where we must keep certain records.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'cookies',
        title: 'Cookies',
        content: (
            <>
                <p>We only set analytics cookies after you accept them in the cookie banner. Until then, or if you reject them, Google Analytics runs in a restricted mode: it does not store analytics cookies on your device and may only send limited, cookieless signals that Google does not use to identify you.</p>
                <div className='mt-4 overflow-x-auto'>
                    <table className='w-full min-w-[520px] text-left text-sm border border-gray-200'>
                        <thead className='bg-gray-50 text-secondary'>
                            <tr>
                                <th scope='col' className='p-3 font-semibold'>Name</th>
                                <th scope='col' className='p-3 font-semibold'>Type</th>
                                <th scope='col' className='p-3 font-semibold'>Purpose</th>
                                <th scope='col' className='p-3 font-semibold'>Duration</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200'>
                            <tr>
                                <td className='p-3 font-mono text-xs'>vaforus-cookie-consent</td>
                                <td className='p-3'>Essential (local storage)</td>
                                <td className='p-3'>Remembers your cookie choice</td>
                                <td className='p-3'>Until you clear it</td>
                            </tr>
                            <tr>
                                <td className='p-3 font-mono text-xs'>_ga, _ga_*</td>
                                <td className='p-3'>Analytics (only with consent)</td>
                                <td className='p-3'>Google Analytics visitor statistics</td>
                                <td className='p-3'>Up to 2 years</td>
                            </tr>
                            <tr>
                                <td className='p-3'>Calendly</td>
                                <td className='p-3'>Third-party embed</td>
                                <td className='p-3'>Runs the call booking calendar when it loads</td>
                                <td className='p-3'>Set by Calendly</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>You can change your choice at any time:</p>
                <p><CookieSettingsButton /></p>
            </>
        ),
    },
    {
        id: 'sharing',
        title: 'Who we share information with',
        content: (
            <>
                <p>We do not sell your personal information. We share it only with service providers that help us run our business, including:</p>
                <ul>
                    <li><strong>Google</strong> for website analytics and tag management.</li>
                    <li><strong>Calendly</strong> for call scheduling.</li>
                    <li><strong>WhatsApp (Meta)</strong> and our email provider, when you message us.</li>
                    <li><strong>Hosting and infrastructure providers</strong> that run our website.</li>
                </ul>
                <p>We may also disclose information where required by law, or to protect our rights or the safety of others.</p>
            </>
        ),
    },
    {
        id: 'international-transfers',
        title: 'International transfers',
        content: (
            <p>Vaforus is a remote business. Our team members and service providers may be located in countries other than yours, including outside the UK and European Economic Area. Where the law requires it, we use appropriate safeguards, such as standard contractual clauses offered by our providers, when personal information is transferred internationally.</p>
        ),
    },
    {
        id: 'retention',
        title: 'How long we keep information',
        content: (
            <p>We keep enquiry and booking information for as long as needed to respond to you and follow up on the discussion. Client records are kept for the duration of our engagement and afterwards for as long as required for legal, tax, or accounting purposes. Analytics data is kept according to our Google Analytics retention settings. When information is no longer needed, we delete or anonymise it.</p>
        ),
    },
    {
        id: 'your-rights',
        title: 'Your rights',
        content: (
            <>
                <p>Depending on where you live, including under UK and EU data protection law, UAE data protection law, and some US state laws, you may have the right to:</p>
                <ul>
                    <li>Access the personal information we hold about you.</li>
                    <li>Ask us to correct or delete it.</li>
                    <li>Object to or restrict how we use it.</li>
                    <li>Receive a copy in a portable format.</li>
                    <li>Withdraw consent at any time, where we rely on consent.</li>
                </ul>
                <p>To make a request, email {email}. We will respond within the time required by applicable law. If you are in the UK or EU, you can also complain to your local data protection authority, such as the Information Commissioner&apos;s Office in the UK.</p>
            </>
        ),
    },
    {
        id: 'security',
        title: 'Security',
        content: (
            <p>We use reasonable technical and organisational measures to protect personal information, including limiting access to the people who need it. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>
        ),
    },
    {
        id: 'children',
        title: 'Children',
        content: (
            <p>Our website and services are intended for businesses. We do not knowingly collect personal information from children.</p>
        ),
    },
    {
        id: 'changes',
        title: 'Changes to this policy',
        content: (
            <p>We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows when it was last changed.</p>
        ),
    },
    {
        id: 'contact',
        title: 'Contact us',
        content: (
            <p>For any question about this policy or your personal information, email {email}.</p>
        ),
    },
]

export default function PrivacyPolicyPage() {
    return (
        <LegalPage
            title='Privacy Policy'
            intro='How we collect, use, and protect your information.'
            updated='28 October 2026'
            sections={sections}
        />
    )
}

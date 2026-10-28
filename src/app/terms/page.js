import Link from 'next/link'
import LegalPage from '@/components/legal/LegalPage'
import app from '@/constants/app.constants'
import pageMetadata from '@/utils/pageMetadata'

export const metadata = pageMetadata(
    'Terms of Use | Vaforus',
    'The terms that apply when you use the Vaforus website.',
    '/terms'
)

const sections = [
    {
        id: 'about',
        title: 'About these terms',
        content: (
            <p>These terms apply to your use of vaforus.com. By using the website, you agree to them. If you do not agree, please do not use the website.</p>
        ),
    },
    {
        id: 'services',
        title: 'Our services',
        content: (
            <>
                <p>The website describes the outsourcing and remote team services Vaforus offers. It is not an offer to provide services on particular terms.</p>
                <p>Any work we carry out for you is governed by a separate written proposal or agreement, which sets out the scope, fees, timelines, and responsibilities. If that agreement conflicts with these terms, the agreement applies.</p>
            </>
        ),
    },
    {
        id: 'information',
        title: 'Information on this website',
        content: (
            <>
                <p>We aim to keep the content accurate and up to date, but it is provided for general information only. It is not professional, legal, or financial advice, and we do not guarantee that it is complete or current.</p>
                <p>Results described on the website, including in reviews and portfolio items, reflect specific past projects. Outcomes depend on factors such as your business, offer, audience, and budget, so we do not promise particular rankings, leads, sales, or other results.</p>
            </>
        ),
    },
    {
        id: 'reviews',
        title: 'Reviews and portfolio',
        content: (
            <p>Client reviews shown on the website are reproduced as written from the platforms named alongside them, with a link to the original source where available. Portfolio items show work completed by our team members.</p>
        ),
    },
    {
        id: 'intellectual-property',
        title: 'Intellectual property',
        content: (
            <p>Unless stated otherwise, the content, design, text, and graphics on this website belong to Vaforus or are used with permission. You may view and share pages for personal or internal business purposes, but you may not copy, reproduce, or republish our content for commercial use without our written permission. Third-party names and logos belong to their respective owners.</p>
        ),
    },
    {
        id: 'acceptable-use',
        title: 'Acceptable use',
        content: (
            <>
                <p>When using the website, you agree not to:</p>
                <ul>
                    <li>Use it in a way that breaks any law or regulation.</li>
                    <li>Attempt to gain unauthorised access to the website, its servers, or related systems.</li>
                    <li>Introduce viruses or other harmful code, or disrupt the website&apos;s operation.</li>
                    <li>Send spam or unsolicited promotional messages through our contact channels.</li>
                </ul>
            </>
        ),
    },
    {
        id: 'third-party',
        title: 'Third-party links and tools',
        content: (
            <p>The website links to and embeds third-party services, such as Calendly, WhatsApp, LinkedIn, and review platforms. We do not control these services and are not responsible for their content or practices. Their own terms and privacy policies apply when you use them.</p>
        ),
    },
    {
        id: 'liability',
        title: 'Limitation of liability',
        content: (
            <>
                <p>The website is provided &ldquo;as is&rdquo;. To the extent permitted by law, Vaforus is not liable for any loss or damage arising from your use of, or inability to use, the website or reliance on its content.</p>
                <p>Nothing in these terms limits liability that cannot be limited by law, such as liability for fraud or for death or personal injury caused by negligence.</p>
            </>
        ),
    },
    {
        id: 'privacy',
        title: 'Privacy',
        content: (
            <p>Our <Link href='/privacy-policy'>Privacy Policy</Link> explains how we handle personal information collected through the website.</p>
        ),
    },
    {
        id: 'changes',
        title: 'Changes to these terms',
        content: (
            <p>We may update these terms from time to time. The &ldquo;Last updated&rdquo; date at the top shows when they were last changed. Continued use of the website means you accept the updated terms.</p>
        ),
    },
    {
        id: 'contact',
        title: 'Contact us',
        content: (
            <p>For questions about these terms, email <a href={`mailto:${app.email}`}>{app.email}</a>.</p>
        ),
    },
]

export default function TermsPage() {
    return (
        <LegalPage
            title='Terms of Use'
            intro='The terms that apply when you use our website.'
            updated='28 October 2026'
            sections={sections}
        />
    )
}

// Preserve quote wording. Demo identities are fictional and must always be disclosed in the UI.
// They are layout placeholders, not the authors of the quoted feedback.
const demoProfiles = {
    '/services/lead-generation-outbound-sales': { name: 'Ethan Parker', region: 'USA', position: '3.2% 4.9%' },
    '/services/email-marketing': { name: 'Olivia Bennett', region: 'UK', position: '34.4% 4.9%' },
    '/services/seo-content': { name: 'Omar Al Mansoori', region: 'UAE', position: '65.5% 4.9%' },
    '/services/social-media-management': { name: 'Charlotte Hughes', region: 'UK', position: '96.6% 4.9%' },
    '/services/web-development': { name: 'Michael Reed', region: 'USA', position: '3.2% 73.2%' },
    '/services/digital-advertising': { name: 'Layla Haddad', region: 'UAE', position: '34.4% 73.2%' },
    '/services/ai-integrations': { name: 'Daniel Brooks', region: 'USA', position: '65.5% 73.2%' },
    '/services/ui-ux-graphic-design': { name: 'Noura Al Harbi', region: 'Saudi Arabia', position: '96.6% 73.2%' },
}

// Separate fictional names for service-page layout previews; never verified attributions.
const innerDemoNames = [
    ['James Whitmore', 'Sarah Collins', 'Ahmed Al Nuaimi', 'Ryan Mitchell', 'Amelia Foster', 'Mariam Khalil', 'Jonathan Mills', 'Emma Richardson', 'Hassan Al Kareem'],
    ['Adam Carter', 'Sophie Clarke', 'Khalid Al Rashid', 'Nathan Walker', 'Isabelle Turner', 'Hana Saleh'],
    ['Lucas Morgan', 'Grace Wilkinson', 'Faisal Al Zahrani', 'Rachel Adams', 'Oliver Spencer', 'Rania Farouk'],
    ['David Harrison', 'Emily Watson', 'Yousef Al Hamadi', 'Lauren Hayes', 'George Fletcher', 'Dalia Hassan'],
    ['Benjamin Scott', 'Lucy Edwards', 'Saif Al Qasimi', 'Megan Cooper', 'Henry Lawson', 'Lina Mansour'],
    ['Matthew Ellis', 'Alice Hamilton', 'Tariq Al Farsi', 'Jessica Warren', 'Thomas Barrett', 'Reem Nasser'],
    ['Andrew Sullivan', 'Hannah West', 'Zaid Al Shamsi', 'Natalie Price', 'William Ashford', 'Salma Darwish'],
    ['Christopher Lane', 'Freya Marshall', 'Abdullah Al Saud', 'Rebecca Stone', 'Edward Palmer', 'Aisha Rahman'],
]
const innerDemoRegions = ['USA', 'UK', 'UAE', 'USA', 'UK', 'Saudi Arabia', 'USA', 'UK', 'UAE']

// Grouped by service (from "Client Testimonials & Portfolios").
const clientFeedback = [
    {
        label: 'Web development',
        href: '/services/web-development',
        quotes: [
            "Vaforus did an excellent job on our website. The final result looked polished and exceeded our expectations.",
            "The team was communicative throughout the project and made sure every detail was right before launch.",
            "Professional, responsive, and incredibly easy to work with. They delivered quality work ahead of schedule.",
            "I was impressed by how quickly they understood what we wanted. The whole experience was smooth from start to finish.",
            "They handled everything with confidence and delivered a website we're genuinely proud of.",
            "I highly recommend Vaforus if you want quality work without the usual headaches.",
            "Vaforus brought our Figma designs to life in a web application built with Next.js and Tailwind CSS. The attention to detail and quality of the implementation stood out. We were pleased with the result and would welcome the opportunity to work together again.",
            "Vaforus delivered what we needed and remained flexible throughout the project. Clear communication made it easy to discuss requirements and keep the work aligned with our expectations.",
            "Communication with Vaforus was clear and responsive. Questions received timely answers, making it easy to stay informed and coordinate the work throughout the project.",
        ],
    },
    {
        label: 'AI integration',
        href: '/services/ai-integrations',
        quotes: [
            "Vaforus did an excellent job helping us integrate AI into our workflow. The quality of work was great, and the whole process was smooth from start to finish.",
            "The team was very proactive and understood what we wanted to achieve. They made the entire process much easier than expected.",
            "I was impressed with how quickly they understood our requirements and delivered a solution that worked for our business.",
            "Great experience working with Vaforus. They were communicative throughout the project and made sure everything worked as expected.",
            "They exceeded my expectations with their approach to automation. The work was well thought out and saved us a lot of manual effort.",
            "I highly recommend Vaforus if you're looking for someone who understands your needs and can make AI work for your business.",
        ],
    },
    {
        label: 'Graphic design',
        href: '/services/ui-ux-graphic-design',
        quotes: [
            "Vaforus did a fantastic job with our designs. The quality of work was excellent, and everything came out exactly as we wanted.",
            "It was a pleasure working with the team. They were very responsive, open to feedback, and quick to make the changes we needed.",
            "The designs exceeded my expectations. They understood our brand and delivered work that looked professional and engaging.",
            "Great communication throughout the project. They were proactive, met the deadlines, and made the whole process easy.",
            "I was impressed with the attention to detail. Every design felt polished and aligned with what we had in mind.",
            "I highly recommend Vaforus if you want someone who understands your vision, delivers great designs, and is easy to work with.",
        ],
    },
    {
        label: 'SEO & content',
        href: '/services/seo-content',
        quotes: [
            "Vaforus delivered excellent work from start to finish. The content was well-written, clear, and exactly what we needed.",
            "They were communicative throughout the project and made sure we were completely satisfied with the final result.",
            "I was impressed by how quickly they understood our industry. The content felt relevant and genuinely useful.",
            "Professional, proactive, and easy to work with. Everything was delivered on time without compromising quality.",
            "They exceeded my expectations with the attention to detail. Every piece of content had a clear purpose.",
            "I highly recommend Vaforus if you're looking for quality content and a team that truly cares about the outcome.",
        ],
    },
    {
        label: 'Social media',
        href: '/services/social-media-management',
        quotes: [
            "Working with Vaforus has been a great experience. They consistently delivered quality content and stayed proactive throughout.",
            "They understood our brand surprisingly fast. The posts felt natural and matched our voice perfectly.",
            "Excellent communication from beginning to end. They made the entire process simple and stress-free.",
            "They exceeded my expectations with the creativity and consistency of the content.",
            "The team stayed engaged throughout the project and made sure every detail was covered.",
            "I highly recommend Vaforus if you want a reliable team that's easy to work with and delivers great work.",
        ],
    },
    {
        label: 'Email marketing',
        href: '/services/email-marketing',
        quotes: [
            "The quality of work was excellent. Every email was engaging and kept the reader interested until the end.",
            "Vaforus is a pleasure to work with. They delivered polished email campaigns and were proactive throughout the project.",
            "They exceeded my expectations with both the copy and the strategy. The emails felt fresh instead of repetitive.",
            "The team understood our brand quickly and delivered work that felt like it came from our own company.",
            "Fast turnaround, great communication, and top-quality execution. I couldn't have asked for a smoother experience.",
            "Highly recommended if you need someone who can write compelling emails and make the whole process easy.",
        ],
    },
    {
        label: 'Lead generation',
        href: '/services/lead-generation-outbound-sales',
        quotes: [
            "Vaforus was fantastic to work with. They took care of our outbound from start to finish and made the whole process feel effortless.",
            "The team delivered excellent work and kept us updated throughout. The messaging felt natural and started getting real conversations.",
            "They exceeded my expectations with the quality of the outreach. Every message felt personalized instead of sounding like a template.",
            "Professional, proactive, and easy to work with. They stayed on top of follow-ups without us having to chase anything.",
            "I highly recommend Vaforus if you want someone who will understand your market and build an outbound system that actually works.",
            "Great experience from beginning to end. They were responsive, organized, and delivered exactly what they promised.",
        ],
    },
    {
        label: 'Digital advertising',
        href: '/services/digital-advertising',
        quotes: [
            "Vaforus exceeded my expectations with the quality of their work. They built campaigns that were thoughtful and well-executed.",
            "The team was proactive throughout the project and kept us informed every step of the way.",
            "It was a pleasure working with them. They delivered excellent work and made the process incredibly straightforward.",
            "They understood our goals quickly and built campaigns that made sense for our business.",
            "Great communication, fast delivery, and a professional approach from beginning to end.",
            "I highly recommend Vaforus if you're looking for a team that's easy to work with and focused on delivering quality results.",
        ],
    },
]

// Filter chips, in the same priority order as the services.
export const testimonialCategories = clientFeedback.map(({ label, href }) => ({ label, href }))

const feedbackItems = clientFeedback.flatMap((group, groupIndex) => group.quotes.map((text, index) => ({
    text,
    label: group.label,
    href: group.href,
    demoProfile: index < 6 ? demoProfiles[group.href] : undefined,
    innerDemoProfile: { name: innerDemoNames[groupIndex][index], region: innerDemoRegions[index] },
})))

// All testimonials, or only those for one service page (by its href).
export const getTestimonials = href => {
    return href ? feedbackItems.filter(item => item.href === href) : feedbackItems
}

// Content for the Ways to Work and Comparison sections.
// Every claim here restates something the site already says (portfolio, FAQ, About) — keep it that way.
// When adding a line, note where it is backed up.

// Backed by the FAQ ("a single project, one service, or ongoing support"; "deliverables, milestones";
// "progress updates"; "review the scope together") and the About copy on founder-led supervision.
export const engagementModels = [
    {
        name: 'Single Project',
        summary: 'A defined piece of work with a clear scope and finish line.',
        includes: ['Agreed scope and deliverables', 'Milestones and review points', 'Fees agreed before work starts'],
        example: 'A website build, an app MVP, or a campaign setup',
    },
    {
        name: 'Ongoing Service',
        summary: 'One function handled for you, month after month.',
        includes: ['A dedicated specialist on the work', 'Regular progress updates', 'Scope reviewed as your needs change'],
        example: 'SEO, social media, or email marketing',
    },
    {
        name: 'Multi-Service Team',
        summary: 'Several services coordinated under one team.',
        includes: ['One point of contact', 'Specialists across development, marketing and sales', 'Founder-led supervision'],
        example: 'A website, SEO, and outbound sales running together',
    },
]

// Fair comparison: freelancers and in-house hires get credit where it is due.
// value: true = advantage, false = drawback, null = depends.
export const comparison = {
    columns: ['Freelancers', 'In-house hire', 'Vaforus'],
    rows: [
        {
            label: 'Recruiting and interviewing',
            cells: [{ value: false, text: 'You find and vet each one' }, { value: false, text: 'Weeks of hiring' }, { value: true, text: 'Handled by us' }],
        },
        {
            label: 'Salaries, benefits and workspace',
            cells: [{ value: true, text: 'None' }, { value: false, text: 'Full employment costs' }, { value: true, text: 'None' }],
        },
        {
            label: 'Who manages the work',
            cells: [{ value: false, text: 'You do' }, { value: false, text: 'You do' }, { value: true, text: 'Our team, founder-supervised' }],
        },
        {
            label: 'Development, marketing and sales skills',
            cells: [{ value: false, text: 'A separate person for each' }, { value: false, text: 'A separate hire for each' }, { value: true, text: 'One coordinated team' }],
        },
        {
            label: 'Scaling up or down',
            cells: [{ value: true, text: 'Flexible' }, { value: false, text: 'Slow to change' }, { value: true, text: 'Scope reviewed as needs change' }],
        },
        {
            label: 'Knows your business day to day',
            cells: [{ value: null, text: 'Varies by person' }, { value: true, text: 'Yes, works only for you' }, { value: true, text: 'Yes, through one ongoing team' }],
        },
    ],
}

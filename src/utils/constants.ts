import {
    BookOpen,
    Bookmark,
    TrendingUp,
    Shield,
    Users,
    User,
    ArrowRight
} from 'lucide-react';

export const statsData = [
    { value: '85+', label: 'Clients Globally' },
    { value: '12+', label: 'Years of Experience' },
    { value: '50+', label: 'Talented Professionals' },
    { value: '35%', label: 'Referral Business' },
    { value: '10%', label: 'Paperless Commitment' },
];


export const SERVICES_DATA = [
    {
        id: 1,
        title: "Book Keeping",
        description: "Enjoy peace of mind with our dedicated personal chief financial officer service.",
        icon: BookOpen,
        bgColor: "white",
        iconColor: "text-blue-600",
        borderColor: "border-blue-200",
        featured: true
    },
    {
        id: 2,
        title: "Strategic Tax Planning",
        description: "Optimize your tax position with our strategies and expert preparation.",
        icon: Bookmark,
        bgColor: "white",
        iconColor: "text-teal-600",
        featured: false
    },
    {
        id: 3,
        title: "Financial Forecasting",
        description: "Navigate your financial future with our data-driven forecasting and analysis.",
        icon: TrendingUp,
        bgColor: "white",
        iconColor: "text-teal-700",
        featured: false
    },
    {
        id: 4,
        title: "Audit Protection",
        description: "Rest easy with our comprehensive audit defense and representation services.",
        icon: Shield,
        bgColor: "white",
        iconColor: "text-teal-600",
        featured: false
    },
    {
        id: 5,
        title: "Business Consulting",
        description: "Unlock your business potential with our tailored consulting and advisory services.",
        icon: Users,
        bgColor: "white",
        iconColor: "text-teal-600",
        featured: false
    },
    {
        id: 6,
        title: "Personal CFO",
        description: "Enjoy peace of mind with our dedicated personal chief financial officer service.",
        icon: User,
        bgColor: "white",
        iconColor: "text-teal-600",
        featured: false
    }
];

export const allServices = [
    {
        id: 1,
        title: "Book Keeping",
        img: "/assets/bookkeeping.png",
        description:
            "We offer comprehensive bookkeeping services to keep your financial records organized and up-to-date. Our team of experts will work with you to ensure your books are in order, allowing you to focus on running your business.Our bookkeeping services ensure your financial records are accurate, up-to-date, and compliant with accounting standards. We handle day-to-day transactions, reconciliations, and financial reporting, allowing you to focus on running your business.",
        features: [
            "Accurate and timely financial record-keeping",
            "Bank and credit card reconciliation",
            "Accounts payable and receivable management",
            "Payroll processing and tracking",
            "Customized financial reporting for decision-making",
            "Tax-ready documentation and compliance",
            "Personalized financial strategies for business growth",
        ],
    },
    {
        id: 2,
        title: "Strategic Tax Planning",
        img: "/assets/taxplan.png",
        description:
            "Taxes can be complex and overwhelming, but with strategic planning, they become an opportunity to save and invest back into your business. Our tax planning service helps you reduce liabilities, avoid unnecessary penalties, and take advantage of credits and deductions available to you. By staying ahead of changing tax regulations, we create tailored strategies that align with your financial goals and long-term vision.",
        features: [
            "Comprehensive tax compliance and filings",
            "Customized tax-saving strategies",
            "Identification of deductions and credits",
            "Guidance on regulatory updates and changes",
            "Support for both personal and business taxation",
            "Quarterly and annual tax planning sessions",
        ],
    },
    {
        id: 3,
        title: "Financial Forecasting",
        img: "/assets/financialforecast.png",
        description:
            "Financial forecasting allows you to anticipate challenges and seize opportunities with confidence. We use data-driven insights and proven methodologies to project future revenues, expenses, and cash flows. Our forecasts give you the clarity to plan budgets, manage risks, and secure investments for your company’s future. With reliable financial projections, you can navigate uncertainty while keeping your growth on track.",
        features: [
            "Detailed cash flow analysis and projections",
            "Budget planning and expense management",
            "Revenue growth strategies tailored to your industry",
            "Scenario planning and risk assessment",
            "Long-term financial health monitoring",
            "Customized reports for investors and stakeholders",
        ],
    },
    {
        id: 4,
        title: "Audit Protection",
        img: "/assets/audit.png",
        description:
            "An audit can be stressful if you’re unprepared, but with our audit protection services, you’ll always be one step ahead. We monitor compliance, maintain proper documentation, and ensure your business meets regulatory requirements. In the event of an audit, our team provides expert defense strategies and support, giving you peace of mind knowing your business is protected.",
        features: [
            "Proactive audit preparation and monitoring",
            "Thorough compliance reviews and checks",
            "Accurate documentation for quick responses",
            "Expert support during audits and disputes",
            "Resolution strategies to avoid penalties",
            "Ongoing guidance to prevent future issues",
        ],
    },
    {
        id: 5,
        title: "Business Consulting",
        img: "/assets/consulting.png",
        description:
            "Every business faces challenges, but with the right guidance, those challenges turn into opportunities. Our consulting services help you streamline operations, optimize resources, and create strategies for sustainable growth. Whether you’re launching a startup, scaling an existing business, or entering new markets, we provide actionable insights that drive measurable results.",
        features: [
            "Operational efficiency and workflow optimization",
            "Strategic business growth planning",
            "Market research and competitor analysis",
            "Profitability and cost-reduction strategies",
            "Team performance evaluation and improvement",
            "Support with funding, partnerships, and scaling",
        ],
    },
    {
        id: 6,
        title: "Personal CFO",
        img: "/assets/personalcfo.png",
        description:
            "A Personal CFO brings the expertise of a Chief Financial Officer directly to you without the cost of a full-time executive. We act as your trusted advisor, helping you make smarter financial decisions for both personal and business wealth. From managing day-to-day finances to building long-term strategies, we ensure your money works harder for you.",
        features: [
            "Personalized financial goal setting and tracking",
            "Comprehensive cash flow management",
            "Smart investment guidance and portfolio review",
            "Debt management and reduction strategies",
            "Wealth preservation and estate planning",
            "Retirement and succession planning",
            "Regular financial health check-ups and advice",
        ],
    },
];


export const qualification = [
    {
        id: 1,
        title: 'Advanced Qualifications',
        icon: '/assets/qualifi1.png',
        description: 'CPA, MBA, and continuous professional education to stay ahead of industry trends'
    },
    {
        id: 2,
        title: 'Extensive Experience',
        icon: '/assets/qualify2.png',
        description: 'Over two decades of hands-on experience across various industries and financial scenarios'
    },
    {
        id: 3,
        title: 'Innovative Solution',
        icon: '/assets/qualify3.png',
        description: 'Cutting-edge strategies tailored to your unique financial situation and goals'
    },
    {
        id: 4,
        title: 'Personalized Attention',
        icon: '/assets/qualify4.png',
        description: 'Direct access to me for all your financial needs and questions'
    },
    {
        id: 5,
        title: 'Proactive Approach',
        icon: '/assets/qualify5.png',
        description: 'Anticipating financial challenges and opportunities to keep you ahead of the curve'
    },
    {
        id: 6,
        title: 'Commitment to Excellence',
        icon: '/assets/qualify6.png',
        description: 'Unwavering dedication to delivering the highest quality financial services'
    }
]



export const whyUs = [
    {
        id: 1,
        img: "/assets/reason1.png",
        title: 'Expertise',
        description: 'Our team of certified professionals brings years of experience and in-depth knowledge to every client engagement.'
    },
    {
        id: 2,
        img: "/assets/reason2.png",
        title: "Personalize Appraoch",
        description: "We tailor our services to meet your unique needs, ensuring that you receive the most relevant and effective financial solutions."
    },
    {
        id: 3,
        img: "/assets/reason3.png",
        title: "Cutting Edge Technology",
        description: "We leverage the latest financial technologies to provide accurate, efficient, and secure services."
    }
]
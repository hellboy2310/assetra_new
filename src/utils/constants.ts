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
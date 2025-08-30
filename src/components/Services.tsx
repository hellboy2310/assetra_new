import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { allServices, whyUs } from "../utils/constants";
import ChooseUs from "../common/ChooseUs";

const topServices = [
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
            "Comprehensive tax compliance and 'filings'",
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
];

const bottomServices = [
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






const Services = () => {
    const [active, setActive] = useState(topServices[0]);
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const totalDots = 6;

    const currentServiceStat = allServices[currentServiceIndex];

    const handlePrev = () => {
        setCurrentServiceIndex((prev) => (prev === 0 ? allServices.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentServiceIndex((prev) => (prev === allServices.length - 1 ? 0 : prev + 1));
    };




    return (
        <section className="space-y-16">
            {/* Header */}
            <div className="w-full bg-primaryColor flex flex-col items-center justify-center">
                <div className="py-28 text-center space-y-4">
                    <h1 className="text-h4 md:text-h7 lg:text-h8 font-merriweather text-white">
                        Our Comprehensive Services
                    </h1>
                    <p className="font-roboto text-small md:text-medSmall lg:text-medSmall text-white font-light">
                        Empowering Your Financial Success with Expert Solutions
                    </p>
                </div>
            </div>

            {/* Tabs + Details */}
            <div className="container mx-auto hidden md:block">
                {/* Top Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {topServices.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => setActive(service)}
                            className="relative cursor-pointer group"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-48 md:h-96 object-cover brightness-75 group-hover:brightness-90 transition-all"
                            />
                            <div
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-white">
                                    {service.title}
                                </h3>
                            </div>
                            {active.id === service.id && (
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-primaryColor"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Active Service Details */}
                <div className="p-6 md:p-12 bg-primaryColor/5">
                    <h2 className="text-2xl md:text-h3 font-bold text-primaryColor">
                        {active.title}
                    </h2>
                    <p className="mt-4 mb-8 text-verySmall md:text-small font-roboto text-customGray w-full leading-6 font-normal tracking-2p">
                        {active.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 space-y-4">
                        {active.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700">
                                <CheckCircle className="w-5 h-5 text-primaryColor" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="mt-20 px-6 py-3 bg-primaryColor text-white rounded-lg shadow hover:bg-primaryColor-dark transition">
                        Request a Consultation
                    </button>
                </div>

                {/* Bottom Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 pb-12">
                    {bottomServices.map((service, i) => (
                        <div
                            key={service.id}
                            onClick={() => setActive(service)}
                            className="relative cursor-pointer group"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-48 md:h-96 object-cover brightness-75 group-hover:brightness-90 transition-all"
                            />
                            <div
                                className={`absolute inset-0 flex flex-col items-center justify-center ${active.id === service.id ? "bg-primaryColor/30" : "bg-black/40"
                                    } transition-all`}
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-white">
                                    {service.title}
                                </h3>
                            </div>
                            {active.id === service.id && (
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-primaryColor"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="block md:hidden relative px-4">
                {/* Service Image */}
                <div
                    key={currentServiceStat.id}
                    className="relative cursor-pointer group"
                >
                    <img
                        src={currentServiceStat.img}
                        alt={currentServiceStat.title}
                        className="w-full h-64 object-cover brightness-75 rounded-2xl"
                    />

                    {/* Overlay Title */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-primaryColor/10">
                        <h3 className="text-lg font-semibold text-white">
                            {currentServiceStat.title}
                        </h3>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primaryColor"
                    >
                        <ArrowLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primaryColor "
                    >
                        <ArrowRight />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 mb-4">
                        {[...Array(totalDots)].map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition ${index === currentServiceIndex ? "bg-primaryColor" : "bg-gray-200"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Service Details */}
                <div className="p-6 bg-primaryColor/5">
                    <h2 className="text-2xl font-bold text-center text-primaryColor">
                        {currentServiceStat.title}
                    </h2>
                    <p className="mt-4 mb-8 text-verySmall text-center font-roboto text-customGray w-full leading-6 font-normal tracking-2p">
                        {currentServiceStat.description}
                    </p>

                    <div className="mb-8">
                        <ul className="grid grid-cols-1 gap-4">
                            {active.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-700">
                                    <CheckCircle className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Centered Button */}
                    <div className="flex justify-center mt-8">
                        <button className="px-6 py-3 bg-primaryColor text-white rounded-lg shadow hover:bg-primaryColor-dark transition">
                            Request a Consultation
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full bg-lightGrayBg items-center justify-center flex py-20">
                <ChooseUs title={' WHY CHOOSE OUR SERVICES?'} services={whyUs} />
            </div>
            <div className="w-full py-24">
                <div className="flex justify-center items-center text-center flex-col">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-h6 md:text-h5 lg:text-h5 text-primaryColor">READY TO TAKE YOUR FIRST STEP</h1>
                        <p className="text-small md:text-medSmall text-customGray">For years we help people to solve their legal problems in such areas are</p>
                    </div>

                    <div className="flex justify-center mt-20">
                        <button className="px-8 py-3 bg-primaryColor text-white rounded-lg shadow hover:bg-primaryColor-dark transition">
                            Request a Consultation
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;


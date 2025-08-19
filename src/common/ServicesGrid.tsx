import { BookOpen, Calculator, TrendingUp, Users, Shield, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ServicesGrid() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const services = [
        {
            icon: BookOpen,
            title: "Book Keeping",
            description: "Enjoy peace of mind with our dedicated personal chief financial officer service."
        },
        {
            icon: Calculator,
            title: "Strategic Tax Planning",
            description: "Optimize your tax position with our forward-thinking strategies and expert preparation."
        },
        {
            icon: TrendingUp,
            title: "Financial Forecasting",
            description: "Navigate your financial future with data-driven forecasting and strategic insights."
        },
        {
            icon: Users,
            title: "Business Consulting",
            description: "Transform your business with expert consulting and strategic guidance tailored to your needs."
        },
        {
            icon: Shield,
            title: "Audit Protection",
            description: "Rest easy with our comprehensive audit protection and professional representation services."
        },
        {
            icon: FileText,
            title: "Financial Reporting",
            description: "Get clear insights with detailed financial reports and performance analytics for your business."
        }
    ];

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    if (isMobile) {
        const currentService = services[currentSlide];
        const IconComponent = currentService.icon;

        return (
            <div className="bg-gray-100 p-6 min-h-screen">
                <div className="flex flex-col items-center space-y-16 mt-16"> {/* big gaps between sections */}
                    {/* Heading + Paragraph */}
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-bold" style={{ color: '#008080' }}>
                            OUR SERVICES
                        </h2>
                        <p className="text-gray-600 text-base max-w-xs mx-auto">
                            For years we help people to solve their legal problems in such areas are
                        </p>
                    </div>

                    {/* Service Card */}
                    <div className="max-w-sm mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-4">
                            {/* Icon */}
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                                style={{ backgroundColor: '#e0f2f1' }}
                            >
                                <IconComponent
                                    className="w-8 h-8"
                                    style={{ color: '#008080' }}
                                    strokeWidth={1.5}
                                />
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {currentService.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {currentService.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-between items-center w-full max-w-sm px-4">
                        {/* Previous Button */}
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-shadow"
                            style={{ borderColor: '#008080' }}
                        >
                            <ChevronLeft className="w-5 h-5" style={{ color: '#008080' }} />
                        </button>

                        {/* Pagination Dots */}
                        <div className="flex space-x-2">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-2' : 'hover:bg-gray-400'
                                        }`}
                                    style={{
                                        backgroundColor:
                                            index === currentSlide ? '#008080' : '#d1d5db',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-shadow"
                            style={{ borderColor: '#008080' }}
                        >
                            <ChevronRight className="w-5 h-5" style={{ color: '#008080' }} />
                        </button>
                    </div>
                </div>
            </div>
        );


    }

    // Desktop view (original grid)
    return (
        <div className="bg-gray-100 p-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#008080' }}>OUR SERVICES</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    For years we help people to solve their legal problems in such areas are
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={index} className="hover:bg-[#00808033] bg-white h-[280px] w-full max-w-[320px] mx-auto p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 group">
                            {/* Styled Icon Container */}
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                                style={{
                                    backgroundColor: '#00808033',
                                    boxShadow: '0 4px 12px rgba(0, 128, 128, 0.1)'
                                }}>
                                <IconComponent className="w-8 h-8" style={{ color: '#008080' }} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>

                            {/* Optional arrow indicator */}
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#008080' }}>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


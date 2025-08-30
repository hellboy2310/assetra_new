import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const ChooseUs = ({ title, services }) => {
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const totalServices = services.length;

    const handlePrevService = () => {
        setCurrentServiceIndex((prev) => (prev - 1 + totalServices) % totalServices);
    };

    const handleNextService = () => {
        setCurrentServiceIndex((prev) => (prev + 1) % totalServices);
    };

    return (
        <div>
            {/* Title */}
            <div className="flex justify-center items-center mb-16">
                <h1 className="text-h6 md:text-h5 lg:text-h5 text-primaryColor">
                    {title || "WHY CHOOSE OUR SERVICES?"}
                </h1>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:flex relative flex-row justify-center items-start gap-16 w-full">
                {/* Horizontal dashed line */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3/4 border-t-2 border-dashed border-primaryColor z-0"></div>

                {services.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex flex-col items-center text-center max-w-xs"
                    >
                        {/* Circle with image */}
                        <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full border-2 border-primaryColor bg-white">
                            <img src={item.img} alt={item.title} className="w-10 h-10 object-contain" />
                        </div>

                        {/* Title */}
                        <h2 className="mt-4 text-medSmall text-black/70 font-semibold">{item.title}</h2>

                        {/* Description */}
                        <p className="text-verySmall text-customGray font-light mt-1">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden bg-lightGrayBg">
                {/* Active service card */}
                <div className="px-3 ">
                    {services.map((item, index) => (
                        <div
                            key={item.id}
                            className={`${index === currentServiceIndex ? "block" : "hidden"} flex flex-col justify-center items-center text-center h-full w-full  hover:shadow-xl`}
                        >
                            {/* Image */}
                            <div className="w-24 h-24 flex items-center justify-center">
                                <img src={item.img} alt={item.title} className="w-16 h-16 object-contain" />
                            </div>

                            <h3 className="px-6 text-lg py-4 sm:text-xl font-semibold text-black">{item.title}</h3>
                            <p className="px-6 text-sm py-2 sm:text-base text-blackDiffType font-light mb-4">{item.description}</p>

                            
                        </div>
                    ))}
                </div>

                {/* Navigation dots and arrows */}
                <div className="py-16 pb-3 sm:pb-0 flex flex-row justify-between px-4 items-center">
                    <button
                        className="w-10 h-10 text-primaryColor rounded-full border border-primaryColor flex items-center justify-center hover:bg-primaryColor/30 hover:text-white transition"
                        onClick={handlePrevService}
                    >
                        <ArrowLeft />
                    </button>

                    <div className="flex space-x-2">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition ${
                                    index === currentServiceIndex ? "bg-primaryColor" : "bg-gray-200"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        className="w-10 h-10 rounded-full border border-primaryColor flex items-center justify-center text-primaryColor hover:bg-primaryColor/30 hover:text-white transition"
                        onClick={handleNextService}
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;

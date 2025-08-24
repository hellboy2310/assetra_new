import { ArrowRight, ArrowLeft, Icon } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { SERVICES_DATA, statsData } from '../utils/constants';
import { useState } from 'react';


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const totalDots = 6;



    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? statsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === statsData.length - 1 ? 0 : prev + 1));
    };

    const handlePrevService = () => {
        setCurrentServiceIndex((prev) => (prev - 1 + totalDots) % totalDots);
    };

    const handleNextServices = () => {
        setCurrentServiceIndex((prev) => (prev + 1) % totalDots);
    };

    const currentStat = statsData[currentIndex];
    const currentServiceStat = SERVICES_DATA[currentServiceIndex];


    return (
        <>
            <section className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/banner_assetra.png')" }}>

                <div className='absolute inset-0 bg-primaryColor/50'></div>
                <div className="relative  px-4 pt-24 pb-[11.5rem] md:pt-40 md:pb-80 text-left md:text-center">
                    <div className="md:text-center flex flex-col space-y-4 text-left" >
                        <h1 className="md:text-h1 text-h4 text-white "><Typewriter
                            words={['Your Global Workforce Experts']}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></h1>
                        <p className="text-small md:text-xl font-light text-white">Unlock global talent with ASSETra’s tailored workforce solutions.</p>
                    </div>
                    <div className="flex mt-16 justify-center space-x-8 ">
                        <button className="flex items-center gap-8 text-white px-3 py-2 md:px-6 md:py-3 border border-gray-white rounded-xl">
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="hidden md:inline-block text-white  px-8 py-2 md:px-6 md:py-3 border border-gray-white rounded-xl">Learn More</button>
                    </div>
                </div>
            </section>

            {/* statistics section desktop */}
            <div className="relative -mt-16 hidden md:flex justify-center">
                <div className="bg-white shadow-lg px-4 rounded-xl  py-8 w-[calc(100%-184px)] ">
                    <div className="grid grid-cols-5 gap-4 ">
                        {statsData.map((item, index) => (
                            <div key={index} className="text-center space-y-4">
                                <h1 className="text-h3 font-bold text-primaryColor">{item.value}</h1>
                                <p className="text-blackfont text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* statistics section mobile */}

            <div className=" flex justify-between items-center px-3 py-6 sm:hidden">
                <button className='text-primaryColor' onClick={handlePrev}>
                    <ArrowLeft />
                </button>

                <div className="flex flex-col justify-center text-center px-12 py-12 space-y-4">
                    <h1 className="text-h3 text-primaryColor">{currentStat.value}</h1>
                    <p className="text-blackfont">{currentStat.label}</p>
                </div>

                <button className='text-primaryColor' onClick={handleNext}>
                    <ArrowRight />
                </button>
            </div>

            <section className="w-full bg-gray-50 py-4 md:py-28">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16 lg:py-24">
                    <div className='flex flex-col md:flex-row items-start gap-6 md:gap-12 lg:gap-16'>
                        <div className='w-full md:w-2/5 flex-shrink-0'>
                            <img className='w-full h-auto object-cover rounded-lg shadow-md' src='assets/aboutus.png' />
                        </div>
                        <div className='w-full md:w-3/5 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left'>
                            <h1 className='text-h3 text-primaryColor font-bold'>ABOUT US</h1>
                            <p className='text-medSmall text-blackDiffType font-light leading-relaxed'>
                                Welcome to ASSETra, a leading business consulting firm operating globally. Our expert team helps businesses achieve sustainable growth with tailored strategies.
                            </p>
                            <p className='text-medSmall text-blackDiffType font-light leading-relaxed'>
                                We specialize in innovation & expertise, ensuring high-impact results. At ASSETra, we drive businesses forward with smart solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="  w-full  bg-lightGrayBg py-16 sm:py-20 md:py-24 space-y-8 sm:space-y-12">
                {/* Heading */}
                <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-primaryColor font-bold">
                        OUR SERVICES
                    </h1>
                    <p className="text-medSmall px-6 pb-12 sm:pb-0 sm:text-base text-blackDiffType font-light max-w-xl">
                        For years we help people to solve their legal problems in such areas are
                    </p>
                </div>

                {/* Cards */}
                <div className="hidden sm:grid max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 
                  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-9">
                    {SERVICES_DATA.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className={`flex flex-col h-full w-full rounded-xl border shadow-md ${item.bgColor} 
                transition-shadow duration-300 hover:shadow-xl`}
                            >
                                <div className={`w-16 h-16 flex items-center justify-center bg-primaryColor/20 rounded-br-3xl ${item.bgColor} ${item.iconColor}`}>
                                    <Icon className="w-6 h-6 " />
                                </div>
                                <h3 className="px-6 text-lg py-4 sm:text-xl font-semibold text-black py-2">
                                    {item.title}
                                </h3>
                                <p className="px-6 text-sm py-2 sm:text-base text-blackDiffType font-light mb-4">
                                    {item.description}
                                </p>
                                <button
                                    aria-label={`Learn more about ${item.title}`}
                                    className="mt-auto pb-3 pr-4 w-full flex justify-end items-center gap-2 text-primaryColor font-medium hover:underline"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* section of services_data in mobile */}
                <div className='md:hidden lg:hidden'>
                    <div className='px-3 '>
                        <div
                            key={currentServiceStat.id}
                            className={`flex flex-col  h-full w-full rounded-xl border shadow-md ${currentServiceStat.bgColor} 
                      transition-shadow duration-300 hover:shadow-xl`}
                        >
                            <div className={`w-16 h-16 flex  items-center justify-center bg-primaryColor/20 rounded-br-3xl rounded-tl-xl ${currentServiceStat.bgColor} ${currentServiceStat.iconColor}`}>
                                <currentServiceStat.icon className="w-6 h-6 " />
                            </div>
                            <h3 className="px-6 text-lg py-4 sm:text-xl font-semibold text-black ">
                                {currentServiceStat.title}
                            </h3>
                            <p className="px-6 text-sm py-2 sm:text-base text-blackDiffType font-light mb-4">
                                {currentServiceStat.description}
                            </p>
                            <button
                                aria-label={`Learn more about ${currentServiceStat.title}`}
                                className="mt-auto pb-3 pr-4 w-full flex justify-end items-center gap-2 text-primaryColor font-medium hover:underline"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div className='py-16  pb-3 sm:pb-0 flex flex-row justify-between px-4'>
                        <button className='w-10 h-10 text-primaryColor rounded-full border border-primaryColor flex items-center justify-center hover:bg-primaryColor/30 hover:text-white transition' onClick={handlePrevService}><ArrowLeft /></button>
                        <div className='space-x-2'>{[...Array(totalDots)].map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition ${index === currentServiceIndex ? "bg-primaryColor" : "bg-gray-200"
                                    }`}
                            />
                        ))}</div>
                        <button className='w-10 h-10 rounded-full border border-primaryColor flex items-center  justify-center text-primaryColor hover:bg-primaryColor/30 hover:text-white transition' onClick={handleNextServices}><ArrowRight /></button>

                    </div>
                </div>

            </section>

            <section className="w-full py-16 sm:py-16 md:py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 md:mb-24">
                        <h1 className="text-h3 text-primaryColor font-bold">
                            CLIENT TESTIMONIALS
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-blackDiffType font-light max-w-xl lg:max-w-2xl px-4">
                            For years we help people to solve their legal problems in such areas are
                        </p>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex flex-col md:flex-row items-start gap-8 sm:gap-10 md:gap-8 lg:gap-16 xl:gap-20">
                        {/* Image Section */}
                        <div className="w-full md:w-2/5 lg:w-2/5 flex-shrink-0 overflow-hidden">
                            <div className="mx-auto max-w-sm md:max-w-none">
                                <img
                                    className="w-full aspect-[413/354] object-contain rounded-tl-[30%] rounded-br-[30%] shadow-md bg-primaryColor"
                                    src="assets/testimonial.png"
                                    alt="Christian Walker - E Commerce Specialist testimonial"
                                />
                            </div>
                        </div>



                        <div className="w-full md:w-3/5 lg:w-3/5 flex flex-col justify-center space-y-6 sm:space-y-6 md:space-y-20 lg:space-y-24">
                            <div className="relative">
                                <div className=" items-start justify-center   sm:bg-white ">
                                    <p className="text-sm sm:text-base md:text-base lg:text-lg text-blackDiffType font-normal leading-7 sm:leading-8 text-center md:text-left">
                                        "I can't thank [Law Firm Name] enough for their professionalism and dedication. From the first consultation, they made me feel heard and supported. My attorney walked me through every step of the process and fought tirelessly to achieve a favorable outcome. I highly recommend them to anyone looking for knowledgeable and compassionate legal representation."
                                    </p>
                                </div>


                            </div>

                            <div className="text-center md:text-left space-y-1 mt-6 md:mt-8">
                                <div className="flex items-center justify-center md:justify-start space-x-3 flex-wrap">
                                    <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-primaryColor font-bold">
                                        - Christian Walker,
                                    </h3>
                                </div>
                                <p className="text-sm sm:text-base md:text-base text-blackDiffType font-light opacity-80">
                                    E Commerce Specialist
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>

    )
}


export default Home;
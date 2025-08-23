import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { statsData } from '../utils/constants';
import { useState } from 'react';


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? statsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === statsData.length - 1 ? 0 : prev + 1));
    };

    const currentStat = statsData[currentIndex];


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
                            <h1 className='text-h3 text-primaryColor'>ABOUT US</h1>
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




        </>

    )
}


export default Home;
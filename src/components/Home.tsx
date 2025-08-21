import { ArrowRight } from 'lucide-react';



const Home = () => {
    return (
        <section className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/banner_assetra.png')" }}>


            <div className="relative  px-4 pt-24 pb-[11.5rem] md:pt-40 md:pb-72 text-left md:text-center">
                <div className="md:text-center flex flex-col space-y-4 text-left" >
                    <h1 className="md:text-h1 text-h4 text-white ">Your Global Workforce Experts</h1>
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
    )
}


export default Home;
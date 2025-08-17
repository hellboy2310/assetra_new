

const Home = () => {
    return (
        <>
            <div className="relative group w-full h-[700px]">
                {/* Content wrapper (headings + buttons together) */}
                <div className="absolute top-[198px] left-0 right-0 flex flex-col items-start md:items-center text-left md:text-center px-4">
                    <h1 className="text-h1 text-white mb-4">
                        Your Global Workforce Experts
                    </h1>
                    <h2 className="text-h3 text-white font-roboto mb-6">
                        Unlock global talent with ASSETra’s tailored workforce solutions.
                    </h2>

                    {/* Buttons */}
                    <div className="flex flex-row  justify-center md:flex-row items-start md:items-center text-left md:text-center space-x-3 md:space-y-0 md:space-x-5">
                        <button className="w-[142px] h-[44px] border border-white text-white rounded-lg">
                            Get Started
                        </button>
                        <button className="w-[142px] h-[44px] border border-white text-white rounded-lg">
                            Learn More
                        </button>
                    </div>

                </div>



                {/* Background */}
                <img
                    className="w-full h-full object-cover"
                    src="/assets/banner_assetra.png"
                />

                <div className="absolute inset-0 bg-primaryColor/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            /////statistics sectioin
            <div className="absolute  w-full md:h-[250px]  flex flex-col md:flex-row items-center justify-center z-10 bg-white space-y-12 md:space-y-0 md:space-x-[5%] rounded-xl shadow-lg p-4 md:p-0">
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-h4 text-primaryColor">85+</h1>
                    <p>Clients Globally</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-h4 text-primaryColor">12+</h1>
                    <p>Years of Experience</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-h4 text-primaryColor">50+</h1>
                    <p>Talented Professionals</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-h4 text-primaryColor">35%</h1>
                    <p>Referral Business</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <h1 className="text-h4 text-primaryColor">10%</h1>
                    <p>Paperless Commitment</p>
                </div>
            </div>

        </>



    )
}


export default Home;
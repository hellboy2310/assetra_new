

const Home = () => {
  return (
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
        <div className="flex flex-row  justify-center  md:flex-row items-start md:items-center text-left md:text-center space-x-3 md:space-y-0 md:space-x-5">
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
  )
}


export default Home;
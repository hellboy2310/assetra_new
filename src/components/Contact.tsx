import ChooseUs from "../common/ChooseUs";
import { qualification, whyUs } from "../utils/constants";

const Contact = () => {
    return (
        <>
            <section className="space-y-16">
                <div className="w-full bg-primaryColor flex flex-col items-center justify-center">
                    <div className="py-28 text-center space-y-4">
                        <h1 className="text-h4 md:text-h7 lg:text-h8 font-merriweather text-white">
                            Contact Us
                        </h1>
                        <p className="font-roboto text-small md:text-medSmall lg:text-medSmall  text-white font-light">
                            Empowering Your Financial Success with Expert Solutions
                        </p>
                    </div>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-start gap-12 md:px-16 px-4">

                    <div className="m w-full md:w-1/3 relative">
                        <img src="/assets/Alex.png" className="w-full mx-auto z-10 relative" />

                        <div className="absolute bottom-0 left-0 w-full h-2/3 rounded-tr-[6rem] bg-primaryColor z-0"></div>
                    </div>

                    <div className=" w-full md:w-2/3 lg:2/3 text-center justify-center md:text-start">
                        <h1 className="text-black font-roboto text-h7 mb-6">Hi, I’m Harsh Yadav</h1>
                        <p className="font-roboto text-small text-customGray leading-6 mb-1">
                            At ASSETra, we are redefining business consulting and outsourcing by delivering exceptional finance, accounting, and tax services tailored to the needs of modern businesses. Headquartered in the United States, with a state-of-the-art shared service center in India, we combine global expertise with local insights to empower CPA firms and businesses of all sizes.
                        </p>
                        <p className="font-roboto text-small text-customGray leading-6 mb-1" >
                            With a strong emphasis on innovation, accuracy, and client confidentiality, we offer a comprehensive suite of services, including tax preparation, financial reporting, compliance, and advisory. Our team of highly qualified professionals ensures the highest standards of service through a secure, transparent, and collaborative approach.
                        </p>
                        <p className="font-roboto text-small text-customGray leading-6 mb-1">
                            Partnering with ASSETra means gaining access to: A dedicated team trained in leading tax software like UltraTax. Infrastructure designed for data security, including restricted external device usage and secure VPNs. Round-the-clock support in the U.S. time zone. At ASSETra, we are committed to delivering results that drive sustainable growth while fostering long-term partnerships.
                        </p>
                    </div>

                </div>


                <div className="w-full bg-primaryColor/20 flex flex-col justify-center text-center items-center py-12">
                    <h1 className="text-h5 text-primaryColor mb-12">WHY CHOOSE ME</h1>

                    {/* Two-column grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
                        {/* Left column - first three items */}
                        <div className="flex flex-col gap-6">
                            {qualification.slice(0, 3).map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col text-center items-center md:flex-row md:items-start md:text-start md:p-8 gap-8"
                                >
                                    <img src={item.icon} alt={item.title} className="w-16 h-16 flex-shrink-0" />
                                    <div className="flex flex-col">
                                        <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                                        <p className="text-small text-customGray">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right column - last three items */}
                        <div className="flex flex-col gap-6">
                            {qualification.slice(3).map((item) => (
                                <div
                                    key={item.id}
                                    className="flex  flex-col items-center md:flex-row md:items-start md:text-start md: p-8  gap-8"
                                >
                                    <img src={item.icon} alt={item.title} className="w-16 h-16 flex-shrink-0" />
                                    <div className="flex flex-col">
                                        <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                                        <p className="text-small text-customGray">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full bg-lightGrayBg items-center justify-center flex py-20">
                <ChooseUs title={' WHY CHOOSE OUR SERVICES?'} services={whyUs} />
            </div>
        </>


    )
}

export default Contact;
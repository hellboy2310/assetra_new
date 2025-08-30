const Team = () => {
    const members = [
        { name: "Alex Morgan", role: "Founder & CEO",img:'/assets/team8.png' },
        { name: "John Doe", role: "CTO",img:'/assets/team2.png' },
        { name: "Jane Smith", role: "CFO",img:'/assets/team8.png' },
        { name: "Michael Brown", role: "COO" ,img:'/assets/team8.png'},
        { name: "Sarah Lee", role: "Marketing Head",img:'/assets/team6.png' },
        { name: "David Clark", role: "HR Manager",img:'/assets/team6.png' },
        { name: "Emma Wilson", role: "Lead Designer",img:'/assets/team2.png' },
        { name: "Chris Johnson", role: "Tech Lead",img:'/assets/team8.png' },
    ];

    return (
        <section>
            {/* Header Section */}
            <div className="w-full bg-primaryColor flex flex-col items-center justify-center">
                <div className="py-28 text-center space-y-4">
                    <h1 className="text-h4 md:text-h7 lg:text-h8 font-merriweather text-white">
                        Contact Us
                    </h1>
                    <p className="font-roboto text-small md:text-medSmall lg:text-medSmall text-white font-light">
                        Empowering Your Financial Success with Expert Solutions
                    </p>
                </div>
            </div>

            {/* Team Grid */}
            <div className="container mx-auto py-24">
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {members.map((member, index) => (
                        <div key={index} className="relative text-center">
                            {/* Image + Background */}
                            <div className="relative">
                                <img
                                    src={member.img}
                                    className="w-full mx-auto z-10 relative"
                                    alt={member.name}
                                />
                                <div className="absolute bottom-0 left-0 w-full h-2/3 rounded-tr-[6rem] bg-primaryColor z-0"></div>
                            </div>

                            {/* Name & Role */}
                            <div className="mt-4">
                                <h1 className="text-lg font-semibold">{member.name}</h1>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

import React from "react";

const Team=()=>{

    return(
        <div>

    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We have diligently worked together to procure this
                    Web Application. Following are the wonderful people that have worked
                </p>
            </div>
            <div className="flex flex-wrap -m-2">
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Shahmeer Rashid</h2>
                            <p className="text-gray-500">Founder</p>
                        </div>
                    </div>
                </div>

                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Raza Mehmood</h2>
                            <p className="text-gray-500">UI Designer</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">S.M.Haris</h2>
                            <p className="text-gray-500">Backend Developer</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Mohammad Ahsan</h2>
                            <p className="text-gray-500">Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Ghulam Murtaza</h2>
                            <p className="text-gray-500">Database Engineer</p>
                        </div>
                    </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Ameer Hamza</h2>
                            <p className="text-gray-500">QA Engineer</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
        </div>
    );
}

export default Team;
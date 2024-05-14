"use client";

export function About() {
    return (
        <div className=" w-screen bg-[#FCFCFD] h-auto p-8 md:p-12 lg:p-16">
            <div className=" bg-[#FCFCFD] w-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="bg-[#FCFCFD] rounded-2xl p-8 text-[#1E1F24] text-center text-md md:text-lg lg:text-xl min-h-[360px]">
                        Wallink is a digital link management and management application. This application provides features such as link storage, link categorization, search features, and is able to integrate with other browsers. The Wallink application is designed to meet the needs and preferences of Generation Z in managing their digital links, with a focus on effectiveness, efficiency and minimal user interaction.
                    </div>
                    <div className="">
                        <img src="/wallink-mockup.png" className=" object-cover min-h-[360px] rounded-2xl"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
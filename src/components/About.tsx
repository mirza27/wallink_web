"use client";

export function About() {
    return (
        <div className=" w-screen bg-white h-auto p-16">
            <div className=" bg-white w-auto px-16">
                <div className="text-black text-center text-xl md:text-2xl lg:text-3xl">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="bg-white rounded-2xl p-8 text-xl">
                            <p>
                                About Wallink
                            </p>
                            Wallink is a digital link management and management application. This application provides features such as link storage, link categorization, search features, and is able to integrate with other browsers. The Wallink application is designed to meet the needs and preferences of Generation Z in managing their digital links, with a focus on effectiveness, efficiency and minimal user interaction.
                        </div>
                        <div className="bg-white">
                            Assets
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
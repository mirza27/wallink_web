"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export function FeatureCard() {
    return (
        <div className="bg-white px-8 w-screen">
            <div className="text-center text-3xl md:text-4xl lg:text-5xl pt-8 pb-4 md:pt-12 lg:pt-16">
                <p className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.700),theme(colors.sky.400),theme(colors.blue.400),theme(colors.sky.400),theme(colors.blue.700),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient">
                    Our Features
                </p>
            </div>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Structured and easy-to-understand interface",
        description:
            "A structured and easy-to-understand interface is a user-friendly design that organizes information and interactive elements in a clear, logical manner, enabling users to navigate and use the system efficiently without confusion. This type of interface typically features intuitive layouts, consistent visual cues, and straightforward language, minimizing the learning curve and reducing the likelihood of errors. By prioritizing simplicity and clarity, such interfaces enhance user satisfaction and productivity, ensuring that even those with minimal technical expertise can perform tasks effectively.",
        link: "#",
    },
    {
        title: "Listing of links by category and subcategory",
        description:
            "Users can categorize links into broad categories, such as Work, Personal, or Research, and further refine these into subcategories for more specific organization, like Projects, Emails, or Data Analysis under Work. This hierarchical listing not only makes it easier to locate specific links quickly but also enhances the overall user experience by maintaining a clean and systematic order. It enables efficient browsing and retrieval of links based on their context and relevance, thereby improving productivity and accessibility.",
        link: "#",
    },
    {
        title: "Search and quick access to selected links",
        description:
            "By incorporating a robust search functionality, users can swiftly find specific links using keywords or tags, enhancing productivity by reducing the time spent browsing through extensive lists. Additionally, the quick access feature provides a streamlined way to pin or mark selected links, making them easily accessible from a dedicated section or shortcut. This dual approach ensures that users can maintain an organized and efficient workflow, with their key resources always at their fingertips.",
        link: "#",
    },
];

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
            "A technology company that builds economic infrastructure for the internet.",
        link: "#",
    },
    {
        title: "Member",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "#",
    },
    {
        title: "Member",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "#",
    },
];

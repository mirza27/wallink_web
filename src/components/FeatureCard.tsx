"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export function FeatureCard() {
  return (
    <div className="bg-[url('/main-texture.png')] bg-contain bg-bottom px-8 w-screen">
      <div className="text-center text-3xl md:text-4xl lg:text-5xl pt-8 pb-4 md:pt-12 lg:pt-16">
        <p
          style={{ fontFamily: "One700" }}
          className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.700),theme(colors.sky.400),theme(colors.blue.400),theme(colors.sky.400),theme(colors.blue.700),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient"
        >
          Our Features
        </p>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Structured and Easy-to-Understand Interface",
    description:
      "A user-friendly design with intuitive layouts and clear language, making navigation and use straightforward, even for those with minimal technical expertise.",
    link: "#features",
  },
  {
    title: "Categorized Link Listing",
    description:
      "Users can organize links into broad categories like Work, Personal, or Research, and further refine these into subcategories such as Projects, Emails, or Data Analysis. This hierarchical structure facilitates quick and easy access to specific links",
    link: "#features",
  },
  {
    title: "Search and Quick Access to Selected Links",
    description:
      "Robust search functionality allows users to find specific links quickly using keywords or tags. The quick access feature lets users pin or mark selected links for easy retrieval from a dedicated section or shortcut, enhancing productivity and organization.",
    link: "#features",
  },
];

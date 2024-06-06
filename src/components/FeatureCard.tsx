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
    image: "/launcher-illustration.png",
    title: "Access links faster",
    description:
      "With just one click, you can easily and conveniently share a bunch of important links with your friends or colleagues. No hassle, all links can be delivered quickly and efficiently, ensuring the information you share arrives on time and without a hitch.",
    link: "#features",
  },
  {
    image: "/favorite-illustration.png",
    title: "Favourite your link",
    description:
      "Bookmark your important and favourite links as bookmarks for faster and easier access anytime. This way, you can easily find and open your frequently visited websites without the need to re-search, saving you time and effort every time you need them.",
    link: "#features",
  },
  {
    image: "/share-illustration.png",
    title: "Share Your Links Easily",
    description:
      "Share a collection of links with your friends or colleagues easily and conveniently with just one click. With this feature, you don't have to bother sending links one by one, so all the information you want to share can be received quickly and efficiently.",
    link: "#features",
  },
];


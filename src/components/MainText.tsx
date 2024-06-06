"use client";

import Link from "next/link";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/typewriter-effect";

export function MainLandingText() {
  const words = [
    {
      text: "Wallink",
      className: "text-[#0569DC]",
    },
    {
      text: "Does",
    },
    {
      text: "It",
    },
    {
      text: "All!",
    },
  ];
  return (
    <div className="bg-[url('/main-texture.png')] bg-contain bg-bottom flex flex-col items-center justify-center h-[680px] w-screen">
      <p className="text-neutral-800 text-base md:text-2xl xl:text-2xl">
        Save Time, Save Links,
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="#about">
          <button className="w-40 h-12 rounded-xl bg-[#FCFCFD] text-[#1E1F24] border border-[#1E1F24] text-lg hover:text-[#0569DC] hover:border-[#0569DC]">
            Learn More
          </button>
        </Link>
        <Link href="#download">
          <button className="w-40 h-12 rounded-xl bg-[#0569DC] border border-transparent text-[#FCFCFD] text-lg">
            Download Now
          </button>
        </Link>
      </div>
    </div>
  );
}

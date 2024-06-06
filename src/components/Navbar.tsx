"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="bg-transparent fixed flex z-50 w-full justify-center backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className=" items-center justify-center py-4">
        <a
          href="#about"
          className="px-2 text-[#1E1F24] hover:text-[#0569DC] text-2xl"
        >
          {" "}
          About{" "}
        </a>
        <a
          href="#features"
          className="px-2 text-[#1E1F24] hover:text-[#0569DC] text-2xl"
        >
          {" "}
          Features{" "}
        </a>
        <a
          href="#reviews"
          className="px-2 text-[#1E1F24] hover:text-[#0569DC] text-2xl"
        >
          {" "}
          Review{" "}
        </a>
        <a
          href="#download"
          className="px-2 text-[#1E1F24] hover:text-[#0569DC] text-2xl"
        >
          {" "}
          Download{" "}
        </a>
      </div>
    </nav>
  );
}

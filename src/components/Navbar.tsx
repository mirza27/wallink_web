"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <nav className="bg-transparent fixed flex z-50 w-full justify-center backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className=" items-center justify-center py-4">
                <a href="#" className="px-2 text-[#1E1F24] hover:text-[#0569DC]"> Home </a>
                <a href="#" className="px-2 text-[#1E1F24] hover:text-[#0569DC]"> About </a>
                <a href="#" className="px-2 text-[#1E1F24] hover:text-[#0569DC]"> Features </a>
                <a href="#" className="px-2 text-[#1E1F24] hover:text-[#0569DC]"> Review </a>
                <a href="#" className="px-2 text-[#1E1F24] hover:text-[#0569DC]"> Download </a>
            </div>
        </nav>
    );
}
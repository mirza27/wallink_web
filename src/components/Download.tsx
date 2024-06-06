"use-client";

import Link from "next/link";
import React from "react";

export default function Download() {
  return (
    <div className=" text-center flex h-auto">
      <div
        className=" bg-white w-auto text-3xl md:text-4xl lg:text-5xl pt-8 pb-4 md:pt-12 lg:pt-16"
        style={{ fontFamily: "One700" }}
      >
        Download <text className="text-[#0569DC]">Wallink</text> Now!
        <div className="pt-8">
          <Link href="https://play.google.com/store/apps/details?id=com.pens.wallink_v1">
            <button className=" h-16 w-48 bg-[#1E1F24] text-[#FCFCFD] text-lg rounded-2xl">
              Google Play
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

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

// "use client";

// export function FeatureCard() {
//   return (
//     <div className="w-screen bg-[#FCFCFD] h-auto p-8 md:p-12 lg:p-16">
//       <div className="bg-[#FCFCFD] w-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
//           <div className="bg-[#FCFCFD] rounded-2xl p-8 text-[#1E1F24] text-center text-md md:text-lg lg:text-xl text-justify">
//             <div className="flex justify-center items-center mb-4">
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 <span>Structured and</span>
//                 <br />
//                 <span>Easy-to-Understand Interface</span>
//               </h2>
//             </div>
//             <p>
//               A user-friendly design with intuitive layouts and clear language,
//               making navigation and use straightforward, even for those with
//               minimal technical expertise
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <img
//               src="/favorite-illustration.png"
//               className="object-cover min-h-[360px] rounded-2xl"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8">
//           <div className="bg-[#FCFCFD] rounded-2xl p-8 text-[#1E1F24] text-center text-md md:text-lg lg:text-xl text-justify">
//             <div className="flex justify-center items-center mb-4">
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 Categorized Link Listing
//               </h2>
//             </div>
//             <p>
//               Users can organize links into broad categories like Work,
//               Personal, or Research, and further refine these into subcategories
//               such as Projects, Emails, or Data Analysis. This hierarchical
//               structure facilitates quick and easy access to specific links
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <img
//               src="/share-illustration.png"
//               className="object-cover min-h-[360px] rounded-2xl"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8">
//           <div className="bg-[#FCFCFD] rounded-2xl p-8 text-[#1E1F24] text-center text-md md:text-lg lg:text-xl text-justify">
//             <div className="flex justify-center items-center mb-4">
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 Search and Quick Access to Selected Links
//               </h2>
//             </div>
//             <p>
//               Robust search functionality allows users to find specific links
//               quickly using keywords or tags. The quick access feature lets
//               users pin or mark selected links for easy retrieval from a
//               dedicated section or shortcut, enhancing productivity and
//               organization
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <img
//               src="/launcher-illustration.png"
//               className="object-cover min-h-[360px] rounded-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// export function FeatureCard() {
//   return (
//     <div className="w-screen bg-[#FCFCFD] h-auto p-8 md:p-12 lg:p-16">
//       <div className="bg-[#FCFCFD] w-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
//           <div className="bg-[#FCFCFD] rounded-2xl p-8 text-[#1E1F24] text-center text-md md:text-lg lg:text-xl text-justify">
//             <div className="flex justify-center items-center mb-4">
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 <span>Structured and</span>
//                 <br />
//                 <span>Easy-to-Understand Interface</span>
//               </h2>
//             </div>
//             <p>
//               A user-friendly design with intuitive layouts and clear language,
//               making navigation and use straightforward, even for those with
//               minimal technical expertise
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <img
//               src="/favorite-illustration.png"
//               className="object-cover min-h-[360px] rounded-2xl"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-4">
//           <div className="flex justify-center">
//             <img
//               src="/share-illustration.png"
//               className="object-cover min-h-[360px] rounded-2xl"
//             />
//           </div>
//           <div className="bg-[#FCFCFD] rounded-2xl p-8 text-[#1E1F24] text-center text-md md:text-lg lg:text-xl text-justify">
//             <div className="flex justify-center items-center mb-4">
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 Categorized Link Listing
//               </h2>
//             </div>
//             <p>
//               Users can organize links into broad categories like Work,
//               Personal, or Research, and further refine these into subcategories
//               such as Projects, Emails, or Data Analysis. This hierarchical
//               structure facilitates quick and easy access to specific links
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-4">
//           <div className="bg-[#FCFCFD] rounded-2xl p-8 text-[#1E1F24] text-center text-md md:text-lg lg:text-xl text-justify">
//             <div className="flex justify-center items-center mb-4">
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 <span>Search and</span>
//                 <br />
//                 <span>Quick Access to Selected Links</span>
//               </h2>
//             </div>
//             <p>
//               Robust search functionality allows users to find specific links
//               quickly using keywords or tags. The quick access feature lets
//               users pin or mark selected links for easy retrieval from a
//               dedicated section or shortcut, enhancing productivity and
//               organization
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <img
//               src="/launcher-illustration.png"
//               className="object-cover min-h-[360px] rounded-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

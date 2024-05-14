"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function ReviewCard() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-[url('/main-texture.png')] bg-contain bg-bottom items-center justify-center relative overflow-hidden">
            <div className="text-black text-center text-3xl md:text-4xl lg:text-5xl pb-16 ">
                <p>
                    What They Say About Us
                </p>
            </div>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
        "I am very satisfied with my Wallink experience! It really helps me store and organise my links neatly. The easy categorisation feature allows me to quickly find whatever I need. Not only that, the ability to edit, delete, or archive links with a swipe of the screen also makes my life a lot easier.",
        name: "Tiwi",
        title: "Rating",
    },
    {
        quote:
        "Wallink provides an indispensable link storage solution for me. I like how it allows me to customise my experience according to my needs. The FAQ feature is also a lifesaver when I get confused. The only thing that could possibly be improved is the integration with other apps for smoother link exchange.",
        name: "Rizky",
        title: "Rating",
    },
    {
        quote: "As someone who often saves important links for future reference, Wallink is the answer to my problem. I appreciate the ease of organising links by category and subcategory. The favourites feature and the ability to copy and share links directly from the app make it a very useful tool in my daily life.",
        name: "Jia",
        title: "Rating",
    },
    {
        quote:
        "Wallink has really made my life easier! With all the features it offers, such as structured categorisation, the ability to edit and delete links easily, and informative FAQs, I feel more organised and efficient. This app is my best friend in exploring the digital world.",
        name: "Alghazi",
        title: "Rating",
    },
    {
        quote:
        "Wallink is a pretty good app for link storage purposes. While I appreciate the ability to organise links in categories and subcategories, I find the user interface a bit clunky. At times, I had trouble navigating between pages. But overall, it's still a useful tool for me.",
        name: "Ale",
        title: "Rating",
    },
];

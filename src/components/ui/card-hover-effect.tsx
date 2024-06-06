import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image: string;
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 min-h-[320px] min-w-[240px] h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="flex flex-col h-full w-full p-4 overflow-hidden bg-white border-4 border-[#1E1F24] group-hover:border-blue-700 relative z-20 rounded-2xl"
          >
            <img
              src={item.image}
              className="w-61 h-61 object-contain"
            />
            <h4
              style={{ fontFamily: "One700", textAlign: "center", fontSize: 24}}
              className="text-[#1E1F24] font-bold tracking-wide text-xl"
            >
              {item.title}
            </h4>
            <p
              style={{ fontFamily: "One400" }}
              className="mt-3 text-[#1E1F24] tracking-wide leading-relaxed text-base text-justify"
            >
              {item.description}
            </p>
          </div>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#C9E2FF] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
        </Link>
      ))}
    </div>
  );
};

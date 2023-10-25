import React from "react";
import { getFormattedDate } from "../utils/utilities";

export default function ConferencePreview({ info, isConf }) {
  return (
    <div className="scale-100 group relative  flex flex-col  select-none">
      <div className="absolute md:hidden -inset-6  transition bg-zinc-50 dark:bg-zinc-800/50 scale-95 group-hover:opacity-100 group-hover:scale-100 opacity-0  overflow-hidden -z-10  sm:w-auto"></div>

      <div className="col-start-2 col-end-5  group/partial relative cursor-pointer  w-full lg:w-[70%] gap-y-3 flex flex-col">
        <p className="pl-3 text-sm text-zinc-400 dark:text-zinc-500  border-l-2 border-0  border-zinc-200 dark:border-zinc-500">
          {info}
        </p>
        <p className="font-semibold mb-2">
          Crafting a design system for a multiplanetary future
        </p>
        <div className="md:absolute -inset-7 transition bg-zinc-50 dark:bg-zinc-800/50  scale-95 group-hover/partial:opacity-100 group-hover/partial:scale-100 opacity-0  overflow-hidden sm:rounded-2xl -z-10  sm:w-auto"></div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Most companies try to stay ahead of the curve when it comes to visual
          design, but for Planetaria we needed to create a brand that would
          still inspire us 100 years from now when humanity has spread across
          our entire solar system.
        </p>
        <p className="text-teal-500 font-semibold text-sm ">
          {isConf ? "Watch video" : "Listen to podcast"} {">"}
        </p>
      </div>
    </div>
  );
}

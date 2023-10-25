import React from "react";
import { getFormattedDate } from "../utils/utilities";

export default function ConferencePreview({ name, desc }) {
  return (
    <div className="scale-100 group relative  flex flex-col  select-none">
      <div className="col-start-2 col-end-5 group/partial relative cursor-pointer  w-full lg:w-[70%] gap-y-3 flex flex-col">
        <h3 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-100">
          {name}{" "}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}

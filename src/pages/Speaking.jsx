import SpeakingElement from "../components/SpeakingElement";

function Speaking() {
  return (
    <div className="px-4 md:px-14 lg:px-28 overflow-hidden">
      <div className="lg:w-[70%] mb-20">
        <h1 className="text-5xl font-bold mb-8 text-zinc-800 dark:text-zinc-100">
          I’ve spoken at events all around the world and been interviewed for
          many podcasts.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          One of my favorite ways to share my ideas is live on stage, where
          there’s so much more communication bandwidth than there is in writing,
          and I love podcast interviews because they give me the opportunity to
          answer questions instead of just present my opinions.
        </p>
      </div>
      <div className="my-12 gap-20 flex flex-col">
        <div className="flex flex-col md:flex-row  gap-y-10 md:border-l md:pt-2 md:pl-6 border-zinc-100 dark:border-zinc-700/40">
          <h2 className="text-sm w-[20rem] font-semibold text-zinc-800 dark:text-zinc-100">
            Conferences
          </h2>
          <ul className="flex flex-col gap-y-16">
            <SpeakingElement info="Business of startups 2020" isConf />
            <SpeakingElement info="Business of startups 2020" isConf />
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 md:border-l md:pt-2 md:pl-6  border-zinc-100 dark:border-zinc-700/40">
          <h2 className="text-sm w-[20rem] font-semibold text-zinc-800 dark:text-zinc-100">
            Podcasts
          </h2>
          <ul className="flex flex-col gap-y-16">
            <SpeakingElement info="Business of startups 2020" />
            <SpeakingElement info="Business of startups 2020" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Speaking;

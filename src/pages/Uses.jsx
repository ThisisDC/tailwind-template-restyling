import UsesElement from "../components/UsesElement";

function Uses() {
  return (
    <div className="px-4 md:px-14 lg:px-28 overflow-hidden">
      <div className="lg:w-[70%] mb-20">
        <h1 className="text-5xl font-bold mb-8">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="text-gray-400 ">
          I get asked a lot about the things I use to build software, stay
          productive, or buy to fool myself into thinking I’m being productive
          when I’m really just procrastinating. Here’s a big list of all of my
          favorite stuff.
        </p>
      </div>
      <div className="my-12 gap-20 flex flex-col">
        <div className="flex flex-col md:flex-row  gap-y-10 md:border-l md:pt-2 md:pl-6 border-zinc-100 dark:border-zinc-700/40">
          <p className="text-sm w-[30rem] font-semibold text-zinc-800 dark:text-zinc-100">
            Workstation
          </p>
          <ul className="flex flex-col gap-y-16">
            <UsesElement
              name="16” MacBook Pro, M1 Max, 64GB RAM (2021)"
              desc="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
            />
            <UsesElement
              name="16” MacBook Pro, M1 Max, 64GB RAM (2021)"
              desc="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
            />{" "}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row  gap-y-10 md:border-l md:pt-2 md:pl-6 border-zinc-100 dark:border-zinc-700/40">
          <p className="text-sm w-[30rem] font-semibold text-zinc-800 dark:text-zinc-100">
            Development tools
          </p>
          <ul className="flex flex-col gap-y-16">
            <UsesElement
              name="16” MacBook Pro, M1 Max, 64GB RAM (2021)"
              desc="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
            />
            <UsesElement
              name="16” MacBook Pro, M1 Max, 64GB RAM (2021)"
              desc="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
            />{" "}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row  gap-y-10 md:border-l md:pt-2 md:pl-6  border-zinc-100 dark:border-zinc-700/40">
          <p className="text-sm w-[30rem] font-semibold text-zinc-800 dark:text-zinc-100">
            Design
          </p>
          <ul className="flex flex-col gap-y-16">
            <UsesElement
              name="16” MacBook Pro, M1 Max, 64GB RAM (2021)"
              desc="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
            />
            <UsesElement
              name="16” MacBook Pro, M1 Max, 64GB RAM (2021)"
              desc="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
            />{" "}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row  gap-y-10 md:border-l md:pt-2 md:pl-6 border-zinc-100 dark:border-zinc-700/40">
          <p className="text-sm w-[30rem] font-semibold text-zinc-800 dark:text-zinc-100">
            Productivity
          </p>
          <ul className="flex flex-col gap-y-16">
            <UsesElement
              name="16” MacBook Pro, M1 Max, 64GB RAM (2021)"
              desc="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
            />
            <UsesElement
              name="16” MacBook Pro, M1 Max, 64GB RAM (2021)"
              desc="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
            />{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Uses;

import ArticlesElement from "../components/ArticlesElement";

function Articles() {
  return (
    <div className="px-4 md:px-8 lg:px-28 overflow-hidden">
      <div className="lg:w-[70%] mb-20">
        <h1 className="text-5xl text-zinc-800 dark:text-zinc-100 font-bold mb-8">
          Writing on software design, company building, and the aerospace
          industry.
        </h1>
        <p className="dark:text-gray-400 text-zinc-600">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </div>
      <ul className="md:border-l border-zinc-100 dark:border-zinc-700/40 mb-24 flex flex-col gap-y-14 md:gap-y-10 ">
        <ArticlesElement />
        <ArticlesElement />
        <ArticlesElement />
      </ul>
    </div>
  );
}

export default Articles;

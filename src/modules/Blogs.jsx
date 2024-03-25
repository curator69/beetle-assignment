import { useState } from "react";
import { blogs } from "../../data";
import { Blog } from "@/components";

const Blogs = () => {
  const [category, setCategory] = useState("All");
  const [loadMore, setLoadMore] = useState(false);

  const blogsToShow = loadMore ? blogs.slice(0, 3) : blogs;

  return (
    <div className="bg-white py-24 px-16 flex flex-col gap-8 text-[var(--dark-purple)] -mt-16">
      <p className="font-bold text-5xl">Latest Posts</p>

      <div className="blogsSearchAndFilterWrapper flex items-centerr justify-between">
        <ul className="flex gap-4 items-center">
          {["All", "Private Equity", "Investment Banking", "Consulting"].map(
            (item, index) => (
              <li
                onClick={() => setCategory(item)}
                key={index}
                className={`p-4 rounded-full cursor-pointer ${
                  category === item
                    ? "bg-[var(--purple)] text-white"
                    : "bg-[var(--light-purple)] text-[var(--dark-purple)]"
                }`}
              >
                {item}
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="p-4 bg-[var(--light-purple)] rounded-full"
          />
          <img src="/images/searchIcon.svg" alt="search icon" />
        </div>
      </div>

      <div className="blogsWrapper grid grid-cols-3 gap-8">
        {blogsToShow.map((blog, index) => (
          <Blog blog={blog} key={index} />
        ))}
      </div>

      <button
        className="p-4 rounded-full w-fit self-center"
        style={{ border: "1px solid var(--dark-purple)" }}
        onClick={() => setLoadMore(!loadMore)}
      >
        {loadMore ? "Load More" : "See less"} &#8595;
      </button>
    </div>
  );
};

export default Blogs;

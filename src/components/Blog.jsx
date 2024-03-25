import Image from "next/image";

const Blog = (blog) => {
  const { image, category, title, description } = blog.blog;
  return (
    <div className="flex flex-col gap-2mt-16">
      <Image
        src={image}
        width={100}
        height={100}
        alt={title}
        className="w-full rounded-xl"
      />
      <p className="font-bold text-base text-[var(--purple)]">{category}</p>
      <p className="font-bold text-2xl">{title}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Blog;

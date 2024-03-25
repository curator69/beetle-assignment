import Image from "next/image";

const Hero = () => {
  return (
    <div className="heroWrapper flex items-center gap-20 px-16">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-5xl capitalize">
          Build more{" "}
          <span className="underline decoration-[var(--yellow)] capitalize">
            Relationships.
          </span>{" "}
          Close more deals. Automate everything in between.
        </h1>
        <p className="text-xl">
          The relationship intelligence & deal flow platform designed by
          ex-investors for Venture Capital
        </p>

        <div className="heroCtaWrappper bg-white p-2 pr-2 rounded-full flex items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-none outline-none text-black pl-8"
          />
          <button className="bg-[var(--purple)] rounded-full p-4">
            Request A Demo &#8594;
          </button>
        </div>
      </div>
      <div className="w-full h-full relative">
        <Image
          src="/images/heroMainImage.svg"
          width={100}
          height={100}
          alt="hero main image"
          className="w-full h-full"
        />
        <Image
          src="/images/heroDirection.svg"
          width={100}
          height={100}
          alt="hero direction image"
          className="absolute left-[25%] bottom-[12%]"
        />
      </div>
    </div>
  );
};

export default Hero;

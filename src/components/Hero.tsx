import BannerImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-base-200 min-h-125 lg:min-h-137.5 container mx-auto my-10 ">
      <div className="max-w-7xl mx-auto px-5 py-10 lg:py-5">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Ideal{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn px-7 bg-linear-to-r from-purple-600 to-pink-500 text-white border-0">
                Explore Technologies
              </button>

              <button className="btn btn-outline btn-primary px-7">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full max-w-sm lg:max-w-lg object-contain drop-shadow-xl">
            <img
              src={BannerImage}
              alt="Development Stack"
              className="w-full max-w-lg object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-5 py-10 md:py-14">

        {/* Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-50 via-white to-pink-50 px-6 py-10 md:px-12 md:py-12">

          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">

              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Build Your Ideal
                <br />

                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Development Stack
                </span>
              </h1>

              <p className="mt-5 text-gray-500 text-base md:text-lg leading-7 max-w-xl mx-auto md:mx-0">
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that
                fits your next project.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">

                <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium px-6 py-3 rounded-lg transition">
                  Explore Technologies
                </button>

                <button className="w-full sm:w-auto bg-white border border-gray-200 hover:border-pink-300 text-gray-600 font-medium px-7 py-3 rounded-lg transition">
                  Learn More →
                </button>

              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 flex justify-center">

              <img
                src={bannerImage}
                alt="Development Stack"
                className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
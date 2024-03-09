import React from "react";

function Hero() {
  return (
    <section className="bg-black">
      <div className="flex items-baseline justify-center pt-28">
        {" "}
        <h2 className="text-white border text-center px-4 p-2 rounded-full">
          {" "}
          See What's New |{" "}
          <span className="text-orange-600"> AI Web Builder</span>
        </h2>
      </div>
      <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-orange-400 font-extrabold sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-white sm:block">
              {" "}
              Increase Conversion.{" "}
            </strong>
          </h1>

          <p className="text-slate-200 mt-4 sm:text-xl/relaxed">
            Start Building your Future Now.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-bold text-black  shadow hover:bg-orange-400 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

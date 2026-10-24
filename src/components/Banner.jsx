
import { ArrowRight, ShoppingCart } from "lucide-react";

const Banner = () => {
  return (
    <section id="home" className="overflow-hidden  bg-gradient-to-br from-white via-sky-50 to-blue-50 md:px-10">
      <div className="max-w-main mx-auto grid min-h-[440px] grid-cols-1 items-center gap-8 px-5 py-12 md:grid-cols-2 md:py-16 lg:min-h-[540px] lg:gap-12 lg:px-0">
        <div className="z-10">
          <span className="inline-block rounded-full bg-blue-100 px-6 py-3 text-sm font-bold text-blue-600 sm:text-base">
            Best Deals
          </span>

          <h1 className="mt-7 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
            Shop Your
            <span className="block text-blue-600">
              Favorite Products
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-500 sm:text-xl sm:leading-8">
            Quality products, better prices,
            <br className="hidden sm:block" /> delivered to your door.
          </p>

          <button className="mt-8 inline-flex items-center gap-5 rounded-2xl bg-blue-600 px-7 py-5 text-lg font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 sm:text-xl">
            Shop Now
            <ArrowRight size={27} />
          </button>
        </div>

        <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[400px]">
          <div className="absolute inset-8 rounded-[40%] bg-blue-100/70 blur-3xl" />

          <div className="relative flex w-full items-end justify-center">
            <div className="absolute right-5 top-4 h-52 w-52 rounded-full bg-blue-100/70 sm:right-10 sm:top-0 sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

            <div className="absolute right-3 top-10 z-20 flex gap-3 sm:right-8">
              <span className="h-12 w-2 rotate-45 rounded-full bg-blue-500" />
              <span className="mt-5 h-12 w-2 rotate-45 rounded-full bg-blue-500" />
              <span className="mt-10 h-12 w-2 rotate-45 rounded-full bg-blue-500" />
            </div>

            <div className="relative z-10 flex items-end">
              <div className="relative z-20 -mr-8 mb-1 w-32 rounded-sm bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 p-5 shadow-xl sm:-mr-14 sm:w-48 sm:p-7">
                <div className="absolute left-1/2 top-0 h-4 w-10 -translate-x-1/2 bg-amber-400/80 sm:h-6 sm:w-14" />
                <div className="h-16 sm:h-20" />
              </div>

              <div className="relative flex h-64 w-40 flex-col items-center rounded-b-lg rounded-t-sm bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 shadow-2xl shadow-blue-300 sm:h-80 sm:w-64 lg:h-96 lg:w-72">
                <div className="absolute -top-14 h-20 w-20 rounded-t-full border-[5px] border-b-0 border-slate-300 sm:-top-20 sm:h-28 sm:w-28 sm:border-[7px]" />

                <div className="mt-20 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-white/80 sm:mt-28 sm:h-28 sm:w-28">
                  <ShoppingCart
                    className="h-10 w-10 text-white sm:h-16 sm:w-16"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import { IoPlayCircleOutline } from "react-icons/io5";

const HeroSection = ({ onExploreDemo }) => {
  return (
    <section className="text-center pt-16 pb-12 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.12] mb-6 tracking-tight">
        Curate your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-400">
          aesthetic.
        </span>
        <br />
        Preview your grid
        <br />
        before you publish.
      </h1>

      <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Enterprise-grade visual planning for professional creators. Synchronize assets,
        refine your palette, and execute your vision with zero latency.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="#demo"
          className="flex items-center justify-center bg-indigo-600 text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-indigo-300/50 hover:bg-indigo-700 hover:shadow-indigo-400/50 hover:scale-105 transition duration-200"
        >
          Start Planning Free
        </a>

        <button
          onClick={onExploreDemo}
          className="flex items-center justify-center gap-2 bg-white text-slate-800 font-semibold text-sm px-8 py-3.5 rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:scale-105 transition duration-200"
        >
          <IoPlayCircleOutline className="text-xl text-slate-800" />
          Watch Demo
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

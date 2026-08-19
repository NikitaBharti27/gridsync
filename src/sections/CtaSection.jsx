import { IoArrowForward } from "react-icons/io5";

const CtaSection = () => {
  return (
    <section id="pricing" className="py-16">
      <div className="bg-slate-900 text-white rounded-3xl p-10 sm:p-16 text-center max-w-5xl mx-auto shadow-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Ready to perfect your grid?
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-8 text-base sm:text-lg">
          Join thousands of creators defining the next generation of visual storytelling.
        </p>

        <button className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-3.5 rounded-full hover:bg-slate-100 hover:scale-105 transition">
          <span>Start Planning Free</span>
          <IoArrowForward className="text-lg text-indigo-600" />
        </button>

        <p className="text-xs text-slate-400 mt-6">
          No credit card required • 14-day free trial on Pro features
        </p>
      </div>
    </section>
  );
};

export default CtaSection;

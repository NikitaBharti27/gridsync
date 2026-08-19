
const SocialProof = () => {
  return (
    <section className="py-12 border-y border-slate-200 text-center my-12">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
        Trusted by leading creative teams
      </p>
      
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 text-slate-400 font-bold text-2xl select-none">
        <span className="font-serif hover:text-slate-800 hover:scale-105 transition cursor-default">
          VOGUE
        </span>
        <span className="italic hover:text-slate-800 hover:scale-105 transition cursor-default">
          Awwwards.
        </span>
        <span className="tracking-widest font-light hover:text-slate-800 hover:scale-105 transition cursor-default">
          KINFOLK
        </span>
        <span className="tracking-widest font-black hover:text-slate-800 hover:scale-105 transition cursor-default">
          VSCO
        </span>
      </div>
    </section>
  );
};

export default SocialProof;

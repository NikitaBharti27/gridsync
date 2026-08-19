import { IoOptionsOutline, IoShuffle, IoGridOutline, IoRefresh } from "react-icons/io5";

const AssetInspector = ({
  selectedImage,
  showGridLines,
  onShuffle,
  onToggleGrid,
  onReset,
}) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition w-full max-w-lg mx-auto lg:mx-0">
      
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl">
            <IoOptionsOutline />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Asset Inspector</h3>
            <p className="text-xs text-slate-400">Live preview telemetry</p>
          </div>
        </div>
        
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Sync
        </span>
      </div>

      {selectedImage && (
        <div className="mb-6 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3 hover:bg-slate-100 transition">
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="w-11 h-11 rounded-xl object-cover"
          />
          <div className="overflow-hidden">
            <p className="text-[11px] text-indigo-600 font-bold uppercase">Active Tile</p>
            <p className="text-sm font-semibold text-slate-800 truncate">{selectedImage.title}</p>
          </div>
        </div>
      )}

      <div className="space-y-3 mb-8 text-sm">
        <div className="flex justify-between items-center py-2 border-b border-slate-100">
          <span className="text-slate-500">Resolution</span>
          <span className="font-semibold text-slate-800">{selectedImage?.resolution || "1080 x 1080 px"}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-slate-100">
          <span className="text-slate-500">Color Space</span>
          <span className="font-semibold text-slate-800">{selectedImage?.colorSpace || "Display P3"}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-slate-100">
          <span className="text-slate-500">Format Target</span>
          <span className="font-semibold text-slate-800">{selectedImage?.format || "HEIC / JPEG"}</span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-slate-100">
          <span className="text-slate-500">Extracted Palette</span>
          <div className="flex items-center gap-1.5">
            {(selectedImage?.palette || ["#D8C4B6", "#4F709C", "#213555", "#F5EFE7"]).map(
              (color, idx) => (
                <span
                  key={idx}
                  className="w-5 h-5 rounded-full border border-white shadow-xs hover:scale-125 transition cursor-pointer"
                  style={{ backgroundColor: color }}
                  title={`Color: ${color}`}
                />
              )
            )}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onShuffle}
            className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm py-3 px-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 hover:scale-105 transition"
          >
            <IoShuffle className="text-lg text-indigo-600" />
            <span>Shuffle</span>
          </button>

          <button
            onClick={onToggleGrid}
            className={`flex items-center justify-center gap-2 font-semibold text-sm py-3 px-4 rounded-xl border hover:scale-105 transition ${
              showGridLines
                ? "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-600"
            }`}
          >
            <IoGridOutline className="text-base text-indigo-600" />
            <span>{showGridLines ? "Hide Grid" : "Show Grid"}</span>
          </button>
        </div>

        <button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm py-3 px-4 rounded-xl hover:scale-105 transition"
        >
          <IoRefresh className="text-lg" />
          <span>Reset Canvas</span>
        </button>
      </div>

    </div>
  );
};

export default AssetInspector;

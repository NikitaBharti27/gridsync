import { 
  IoAddOutline, 
  IoMenuOutline, 
  IoHome, 
  IoSearchOutline, 
  IoVideocamOutline, 
  IoPersonOutline,
  IoCheckmarkCircle
} from "react-icons/io5";

const PhoneMockup = ({ images, selectedImage, onSelectImage, showGridLines = true }) => {
  return (
    <div className="w-full max-w-[340px] sm:max-w-[360px] h-[660px] bg-slate-900 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col justify-between hover:shadow-indigo-950/40 transition">
      <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col">
        
        <div className="pt-2 flex justify-center bg-white">
          <div className="w-24 h-4 bg-slate-900 rounded-full"></div>
        </div>

        <div className="pt-3 pb-3 px-4 border-b border-slate-100 flex justify-between items-center">
          <span className="font-bold text-sm text-slate-800">@creator_studio</span>
          <div className="flex gap-3 text-slate-700 text-lg">
            <IoAddOutline className="cursor-pointer hover:text-indigo-600 hover:scale-110 transition" />
            <IoMenuOutline className="cursor-pointer hover:text-indigo-600 hover:scale-110 transition" />
          </div>
        </div>

        <div className="flex-1 bg-slate-100 overflow-y-auto">
          <div className={`grid grid-cols-3 ${showGridLines ? "gap-0.5 bg-slate-200" : "gap-0"}`}>
            {images.map((item) => {
              const isSelected = selectedImage?.id === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectImage(item)}
                  className={`relative aspect-square cursor-pointer overflow-hidden bg-slate-200 ${
                    isSelected ? "ring-2 ring-indigo-600 z-10" : ""
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-indigo-600/20 flex items-center justify-center pointer-events-none">
                      <IoCheckmarkCircle className="text-white text-xl" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-slate-400 py-3">
            Click any photo to inspect
          </p>
        </div>

        <div className="h-14 border-t border-slate-100 flex justify-around items-center bg-white text-slate-500 text-xl">
          <button className="text-indigo-600 hover:scale-110 transition p-1">
            <IoHome />
          </button>
          <button className="hover:text-indigo-600 hover:scale-110 transition p-1">
            <IoSearchOutline />
          </button>
          <button className="hover:text-indigo-600 hover:scale-110 transition p-1">
            <IoVideocamOutline />
          </button>
          <button className="hover:text-indigo-600 hover:scale-110 transition p-1">
            <IoPersonOutline />
          </button>
        </div>

      </div>
    </div>
  );
};

export default PhoneMockup;

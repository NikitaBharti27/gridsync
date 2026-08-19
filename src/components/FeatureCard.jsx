import { 
  IoFlashOutline, 
  IoSyncOutline, 
  IoSaveOutline, 
  IoColorPaletteOutline 
} from "react-icons/io5";

const icons = {
  Zap: IoFlashOutline,
  RefreshCw: IoSyncOutline,
  HardDrive: IoSaveOutline,
  Palette: IoColorPaletteOutline,
};

const FeatureCard = ({ iconName, title, description, customSwatches }) => {
  const Icon = icons[iconName] || IoFlashOutline;

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 hover:-translate-y-1 transition duration-300 flex flex-col justify-between group">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
          <Icon />
        </div>

        {customSwatches && (
          <div className="flex gap-2 mb-4">
            {customSwatches.map((color, i) => (
              <span
                key={i}
                className="w-7 h-7 rounded-full border border-slate-200 hover:scale-110 transition cursor-pointer"
                style={{ backgroundColor: color }}
                title={`Color: ${color}`}
              />
            ))}
          </div>
        )}

        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

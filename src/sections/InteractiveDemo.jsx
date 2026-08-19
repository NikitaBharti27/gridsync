import { useState } from "react";
import PhoneMockup from "../components/PhoneMockup";
import AssetInspector from "../components/AssetInspector";
import { INITIAL_GRID_IMAGES } from "../data/mockData";

const InteractiveDemo = () => {
  const [images, setImages] = useState(INITIAL_GRID_IMAGES);
  const [selectedImage, setSelectedImage] = useState(INITIAL_GRID_IMAGES[0]);
  const [showGridLines, setShowGridLines] = useState(true);

  const handleShuffle = () => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setImages(shuffled);
  };

  const handleToggleGrid = () => {
    setShowGridLines(!showGridLines);
  };

  const handleReset = () => {
    setImages(INITIAL_GRID_IMAGES);
    setSelectedImage(INITIAL_GRID_IMAGES[0]);
    setShowGridLines(true);
  };

  return (
    <section id="demo" className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="flex justify-center">
          <PhoneMockup
            images={images}
            selectedImage={selectedImage}
            onSelectImage={(img) => setSelectedImage(img)}
            showGridLines={showGridLines}
          />
        </div>

        <div className="flex justify-center lg:justify-start">
          <AssetInspector
            selectedImage={selectedImage}
            showGridLines={showGridLines}
            onShuffle={handleShuffle}
            onToggleGrid={handleToggleGrid}
            onReset={handleReset}
          />
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;

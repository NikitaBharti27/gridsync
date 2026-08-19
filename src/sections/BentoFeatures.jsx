import FeatureCard from "../components/FeatureCard";
import { FEATURE_ITEMS } from "../data/mockData";

const BentoFeatures = () => {
  return (
    <section id="features" className="py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Engineered for seamless creativity.
        </h2>
        <p className="text-slate-600">
          State-of-the-art tools designed for creators who demand grid perfection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {FEATURE_ITEMS.map((feature) => (
          <FeatureCard
            key={feature.id}
            iconName={feature.iconName}
            title={feature.title}
            description={feature.description}
            customSwatches={feature.customSwatches}
          />
        ))}
      </div>
    </section>
  );
};

export default BentoFeatures;

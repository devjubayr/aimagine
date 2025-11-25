import Link from "next/link";
import RightArrowIcon from "../ui/RightArrowIcon";

const FeatureCard = ({ feature }) => {
  return (
    <div
      key={feature.id}
      className="group relative bg-dark/40 border border-border-dark rounded-3xl p-8 hover:border-white transition-all duration-500 "
    >
      <div className="relative mb-8">
        <div className="w-16 h-16 bg-dark-lighter border-2 border-border-light rounded-2xl flex items-center justify-center  transition-all duration-500 ">
          {feature.icon}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
        {feature.title}
      </h3>
      <p className="text-text-gray leading-relaxed mb-6">
        {feature.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {feature.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-dark-lighter border border-border-dark rounded-full text-xs text-text-gray group-hover:border-white transition-all"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={feature.detailsLink}
        className="mt-6 flex items-center text-text-gray group-hover:text-white transition-colors"
      >
        <span className="text-sm font-medium mr-2">Learn more</span>
        <RightArrowIcon />
      </Link>
    </div>
  );
};
export default FeatureCard;

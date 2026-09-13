import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

const TechnologyCard = ({ tech, onAdd }) => {
  const { name, description, category, level, badge, logo, rating } = tech;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between text-left">
      {/* Logo + Badge */}
      <div className="flex items-center justify-between mb-3">
        <img src={logo} alt={name} className="w-10 h-10 object-contain" />
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
          {badge}
        </span>
      </div>

      {/* Title + Description */}
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500 mt-1">{description}</p>

      {/* Tags + Rating */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-2">
          <span className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700">
            {category}
          </span>
          <span className="px-2 py-1 text-xs rounded-full bg-green-50 text-green-700">
            {level}
          </span>
        </div>
        <div className="flex items-center text-yellow-500 text-sm font-medium">
          <FaStar className="mr-1" /> {rating}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => {
          onAdd(tech);
          toast.success(`${name} added to stack!`);
        }}
        className="mt-5 w-full py-2 text-sm font-semibold rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;





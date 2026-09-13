import TechnologyCard from "./TechnologyCard";
import technologies from "../data/technologies.json";

const Technologies = ({ onAdd }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Explore the <span className="text-pink-500">Technologies</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.id} tech={tech} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;






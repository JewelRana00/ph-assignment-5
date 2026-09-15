import { FiCheck } from "react-icons/fi";
import type { ITechnology } from "../types/technology";
import { toast } from "react-toastify";

interface TechnologyCardProps {
  technology: ITechnology;
  addToStack: (technology: ITechnology) => void;
  stack: ITechnology[];
}

const TechnologyCard = ({
  technology,
  addToStack,
  stack,
}: TechnologyCardProps) => {
  const isAdded = stack.some((item) => item.id === technology.id);

  return (
    <div
      className={`card bg-base-100 shadow-sm border
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-xl
    ${isAdded ? "border-pink-400 bg-pink-50" : "border-transparent"}`}
    >
      <div className="card-body pt-20 relative space-y-5">
        <img
          className="h-10 w-10 absolute top-5 left-5"
          src={technology.icon}
          alt={technology.name}
        />

        <span className="absolute top-7 right-7 bg-white text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
          {technology.badge}
        </span>

        <h2 className="card-title">{technology.name}</h2>

        <p>{technology.description}</p>

        <div className="flex flex-wrap justify-between items-center gap-3 pt-2">
          <button className="py-1.5 px-4 bg-base-300 rounded-xl">
            {technology.category}
          </button>

          <span className="font-bold">{technology.difficulty}</span>

          <span>{`⭐ ${technology.rating}`}</span>
        </div>

        <button
          onClick={() => {
            addToStack(technology);
            toast.success(`${technology.name} added to your stack!`);
          }}
          disabled={isAdded}
          className="btn w-full bg-black text-white hover:bg-gray-800 disabled:bg-gray-300"
        >
          {isAdded ? (
            <>
              <FiCheck size={14} className="text-pink-600" />
              <span className="text-pink-600">Added to Stack</span>
            </>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;

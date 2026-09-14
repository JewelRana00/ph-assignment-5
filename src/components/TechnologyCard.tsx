import type { ITechnology } from "../types/technology";

const TechnologyCard = ({ technology }: { technology: ITechnology }) => {
  return (
    <div
      className="card bg-base-100 shadow-sm
             transition-all duration-300
             hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50"
    >
      <div className="card-body pt-20 relative space-y-5">
        {/* Icon */}
        <img
          className="h-10 w-10 absolute top-5 left-5"
          src={technology.icon}
          alt={technology.name}
        />

        {/* Badge */}
        <span className="absolute top-7 right-7 bg-white text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
          {technology.badge}
        </span>

        {/* Content */}
        <h2 className="card-title">{technology.name}</h2>

        <p>{technology.description}</p>

        {/* Info */}
        <div className="flex justify-between items-center pt-2">
          <button className="py-1.5 px-4 bg-base-300 rounded-xl">
            {technology.category}
          </button>

          <span className="font-bold">{technology.difficulty}</span>

          <span>{`⭐ ${technology.rating}`}</span>
        </div>

        {/* Add Button */}
        <button className="btn bg-black w-full rounded-[10px] text-white">
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;

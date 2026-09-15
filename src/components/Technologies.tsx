import { use } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
  addToStack: (technology: ITechnology) => void;
  stack: ITechnology[];
}

const Technologies = ({
  technologiesPromise,
  addToStack,
  stack,
}: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
      {technologies.map((technology: ITechnology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          addToStack={addToStack}
          stack={stack}
        />
      ))}
    </div>
  );
};

export default Technologies;

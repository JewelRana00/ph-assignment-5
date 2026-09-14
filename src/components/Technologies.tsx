import { use } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div className="grid grid-cols-3 gap-6">
      {technologies.map((technology: ITechnology) => (
        <TechnologyCard key={technology.id} technology={technology} />
      ))}
    </div>
  );
};

export default Technologies;

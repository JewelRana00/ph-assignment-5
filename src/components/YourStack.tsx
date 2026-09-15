import { FiX } from "react-icons/fi";
import type { ITechnology } from "../types/technology";

interface YourStackProps {
  stack: ITechnology[];
  removeFromStack: (id: string) => void;
  removeAll: () => void;
}

const YourStack = ({ stack, removeFromStack, removeAll }: YourStackProps) => {
  return (
    <div className="card bg-base-100 shadow-sm border">
      <div className="card-body">
        <h2 className="card-title">Your Stack</h2>

        <p className="text-sm text-gray-500">
          {stack.length} {stack.length === 1 ? "technology" : "technologies"}{" "}
          selected
        </p>

        {stack.length === 0 ? (
          <div className="border border-dashed rounded-lg p-6 text-center text-gray-400 mt-3">
            Your stack is empty.
            <p className="text-xs mt-1">Add technologies from the list.</p>
          </div>
        ) : (
          <div className="space-y-3 mt-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="border rounded-lg p-3 flex items-center gap-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-8 h-8"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{technology.name}</h3>

                  <p className="text-xs text-gray-500">{technology.category}</p>
                </div>

                <button
                  onClick={() => removeFromStack(technology.id)}
                  className="btn btn-sm btn-circle btn-ghost text-gray-500 hover:text-red-500"
                >
                  <FiX size={18} />
                </button>
              </div>
            ))}
          </div>
        )}

        {stack.length > 0 && (
          <button
            onClick={removeAll}
            className="btn btn-outline btn-error w-full mt-4"
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
};

export default YourStack;

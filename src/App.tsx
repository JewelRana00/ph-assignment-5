import { useState, Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import YourStack from "./components/YourStack";
import Technologies from "./components/Technologies";
import type { ITechnology } from "./types/technology";
import Footer from "./components/Footer";

const fetchTechnologies = async (): Promise<ITechnology[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = fetchTechnologies();

function App() {
  const [stack, setStack] = useState<ITechnology[]>([]);

  const addToStack = (technology: ITechnology) => {
    setStack((prevStack) => {
      const alreadyExists = prevStack.some((item) => item.id === technology.id);

      if (alreadyExists) return prevStack;

      return [...prevStack, technology];
    });
  };

  const removeFromStack = (id: string) => {
    setStack((prevStack) =>
      prevStack.filter((technology) => technology.id !== id),
    );
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />
      <Hero />

      <div className="container mx-auto">
        <div className="mb-6">
          <h2 className="font-bold text-2xl">
            Explore the
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="my-3">
            Explore modern technologies and tools for web development.
            <br />
            Choose the right tools to build your ideal development stack.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <Suspense fallback={<p>Loading...</p>}>
              <Technologies
                technologiesPromise={technologiesPromise}
                addToStack={addToStack}
              />
            </Suspense>
          </div>

          <div className="col-span-1">
            <YourStack
              stack={stack}
              removeFromStack={removeFromStack}
              removeAll={removeAll}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;

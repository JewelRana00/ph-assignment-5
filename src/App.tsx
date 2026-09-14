import { useState, Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import YourStack from "./components/YourStack";
import Technologies from "./components/Technologies";
import type { ITechnology } from "./types/technology";
import Footer from "./components/Footer";

const technologiesPromise = async (): Promise<ITechnology[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

function App() {
  const [stack, setStack] = useState<ITechnology[]>([]);

  return (
    <>
      <Navbar />
      <Hero />

      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="font-bold text-xl">
            Explore the
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p>
            Explore a wide range of modern technologies and tools for web
            development. Choose the right technologies to build your ideal
            development stack.
          </p>
        </div>

        {/* Cards + Your Stack */}
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <Suspense fallback={<p>Loading...</p>}>
              <Technologies technologiesPromise={technologiesPromise()} />
            </Suspense>
          </div>

          <div className="col-span-1">
            <YourStack stack={stack} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import { animals as data } from "./assets/data/data";
import Animal from "./components/Animal";
import Filter from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [animals, setAnimals] = useState(data);
  const [filtered, setFiltered] = useState(data);
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="App">
      <Filter
        animals={animals}
        setFiltered={setFiltered}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <motion.div layout className="animals">
        <AnimatePresence>
          {filtered.map((animal) => {
            return <Animal key={animal.id} animal={animal} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;

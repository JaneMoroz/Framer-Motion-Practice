import { React, useEffect } from "react";

const Filter = ({ animals, setFiltered, activeFilter, setActiveFilter }) => {
  useEffect(() => {
    if (activeFilter === "all") {
      setFiltered(animals);
      return;
    }
    const newFiltered = animals.filter(
      (animal) => animal.animal === activeFilter
    );
    setFiltered(newFiltered);
  }, [activeFilter]);

  return (
    <div className="filter-container">
      <button
        className={activeFilter === "all" ? "active" : ""}
        onClick={() => {
          setActiveFilter("all");
        }}
      >
        All
      </button>
      <button
        className={activeFilter === "fox" ? "active" : ""}
        onClick={() => {
          setActiveFilter("fox");
        }}
      >
        Fox
      </button>
      <button
        className={activeFilter === "deer" ? "active" : ""}
        onClick={() => {
          setActiveFilter("deer");
        }}
      >
        Deer
      </button>
    </div>
  );
};

export default Filter;

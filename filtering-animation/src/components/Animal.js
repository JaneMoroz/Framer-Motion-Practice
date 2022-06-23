import React from "react";
import { motion } from "framer-motion";

const Animal = ({ animal }) => {
  const { image, name } = animal;
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="animal"
    >
      <img src={image} alt={name} />
    </motion.div>
  );
};

export default Animal;

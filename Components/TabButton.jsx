import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-black " : "text-gray";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-gray ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#2772db] mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;

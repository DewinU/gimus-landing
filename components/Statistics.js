import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const stats = [
  {
    percentage: "52%",
    description: "de los jóvenes tiene dificultades para comunicar sus habilidades en entrevistas laborales"
  },
  {
    percentage: "80%",
    description: "de los encuestados se sentiría cómodo practicando con IA"
  }
];

const Statistics = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="statistics">
      <ScrollAnimationWrapper>
        <motion.div className="grid grid-flow-row gap-8 py-6 sm:py-16" variants={scrollAnimation}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                className="flex flex-col items-center text-center p-8 bg-white-500 rounded-lg shadow-lg"
                key={index}
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
                  {stat.percentage}
                </h3>
                <p className="text-black-500 text-lg">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Statistics;
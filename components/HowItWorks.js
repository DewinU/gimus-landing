import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const steps = [
  {
    title: "Carga tu CV y selecciona el tipo de entrevista",
    description: "Sube tu currículum y elige el tipo de entrevista que deseas practicar",
    icon: "/assets/Icon/upload-cv.svg"
  },
  {
    title: "Simula la entrevista en tiempo real",
    description: "Interactúa con nuestro sistema de IA que se adapta a tus respuestas",
    icon: "/assets/Icon/interview.svg"
  },
  {
    title: "Recibe retroalimentación detallada",
    description: "Obtén un análisis completo de tu desempeño y áreas de mejora",
    icon: "/assets/Icon/feedback.svg"
  },
  {
    title: "Mejora tus respuestas",
    description: "Utiliza las sugerencias para perfeccionar tus habilidades",
    icon: "/assets/Icon/improve.svg"
  }
];

const HowItWorks = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="how-it-works">
      <ScrollAnimationWrapper>
        <motion.div className="grid grid-flow-row gap-8 py-6 sm:py-16" variants={scrollAnimation}>
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              ¿Cómo funciona?
            </h2>
            <p className="text-black-500 mt-2">
              Proceso simple y efectivo para mejorar tus habilidades de entrevista
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                className="flex flex-col items-center text-center p-4"
                key={index}
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
              >
                <div className="flex items-center justify-center bg-orange-100 w-16 h-16 rounded-full mb-4">
                  <img src={step.icon} className="h-8 w-8" alt={step.title} />
                </div>
                <h3 className="text-xl font-medium text-black-600 mb-2">{step.title}</h3>
                <p className="text-black-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default HowItWorks;
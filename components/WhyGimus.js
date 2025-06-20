import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  {
    title: "Basado en investigaciones académicas",
    description: "Metodología respaldada por estudios universitarios sobre entrevistas efectivas",
    icon: "/assets/Icon/research.svg"
  },
  {
    title: "Creado por jóvenes nicaragüenses",
    description: "Equipo local comprometido con el desarrollo profesional en Latinoamérica",
    icon: "/assets/Icon/team.svg"
  },
  {
    title: "Tecnologías de IA modernas",
    description: "Integración de Whisper AI, DeepSeek y Google TTS para una experiencia realista",
    icon: "/assets/Icon/ai-tech.svg"
  },
  {
    title: "Adaptado al mercado latinoamericano",
    description: "Contenido y retroalimentación contextualizada a nuestra región",
    icon: "/assets/Icon/latam.svg"
  }
];

const WhyGimus = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="why-gimus">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <ScrollAnimationWrapper>
          <motion.div className="grid grid-flow-row gap-8 py-6 sm:py-16" variants={scrollAnimation}>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                ¿Por qué elegir Gimus?
              </h2>
              <p className="text-black-500 mt-2">
                Innovación y tecnología al servicio de tu desarrollo profesional
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  className="flex flex-col items-center text-center p-4"
                  key={index}
                  custom={{duration: 2 + index}}
                  variants={scrollAnimation}
                >
                  <div className="flex items-center justify-center bg-orange-100 w-16 h-16 rounded-full mb-4">
                    <img src={feature.icon} className="h-8 w-8" alt={feature.title} />
                  </div>
                  <h3 className="text-xl font-medium text-black-600 mb-2">{feature.title}</h3>
                  <p className="text-black-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default WhyGimus;
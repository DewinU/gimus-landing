import React, { useMemo } from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Planes flexibles para estudiantes y organizaciones
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Elige el plan que mejor se adapta a tu camino de preparación profesional.
            </motion.p>
          </ScrollAnimationWrapper>
          
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {/* Plan Prueba Gratuita */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Prueba gratuita
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">1 simulación de entrevista completa</li>
                  <li className="relative check custom-list my-2">Retroalimentación básica generada por IA</li>
                  <li className="relative check custom-list my-2">Consejos en tiempo real</li>
                  <li className="relative check custom-list my-2">Acceso inmediato desde navegador</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4">$0</p>
                  <ButtonOutline>Comenzar gratis</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          
            {/* Plan Estudiante Individual */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Estudiante Individual
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">10 simulaciones al mes</li>
                  <li className="relative check custom-list my-2">Análisis detallado de habilidades blandas</li>
                  <li className="relative check custom-list my-2">Reporte personalizado de desempeño</li>
                  <li className="relative check custom-list my-2">Seguimiento de progreso</li>
                  <li className="relative check custom-list my-2">Acceso prioritario a nuevas funciones</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4">
                    $9.99 <span className="text-black-500">/ mes</span>
                  </p>
                  <ButtonOutline>Suscribirse</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            
            {/* Plan Instituciones Educativas */}
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Instituciones Educativas
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">Acceso para múltiples estudiantes</li>
                  <li className="relative check custom-list my-2">Informes grupales para docentes</li>
                  <li className="relative check custom-list my-2">Personalización de escenarios de entrevista</li>
                  <li className="relative check custom-list my-2">Sesiones de capacitación inicial</li>
                  <li className="relative check custom-list my-2">Soporte dedicado</li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4">
                    Desde $199 <span className="text-black-500">/ año</span>
                  </p>
                  <ButtonOutline>Contactar</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    ¡Comienza ahora y mejora tus habilidades de entrevista!
                  </h5>
                  <p>Únete a Gimus y prepárate para tu próxima entrevista.</p>
                </div>
                <ButtonPrimary>Empezar</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

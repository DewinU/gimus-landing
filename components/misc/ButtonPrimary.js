import React from "react";

const ButtonPrimary = ({ children, addClass}) => {
  return (
    <a
      href="https://spontaneous-syrniki-54f330.netlify.app/"
      target="_blank"
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </a>
  );
};

export default ButtonPrimary;

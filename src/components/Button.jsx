import React from "react";

const Button = ({ children, varient, size, type }) => {
  return (
    <button
      type={type || "button"}
      className={`backdrop-blur-[4px] cursor-pointer flex justify-center items-center rounded-xl ${
        varient === "transparent"
          ? "sm:min-w-[150px] min-w-[140px] h-[50px] bg-white/5 border border-white/10 text-white shadow-xl shadow-black/25"
          : "min-w-[140px] h-[50px] bg-gradient-to-l from-(--primary-light) via-(--primary-dark) to-(--primary-light) font-bold text-black"
      } ${size === "full" && "!w-full"}`}
    >
      {children}
    </button>
  );
};

export default Button;

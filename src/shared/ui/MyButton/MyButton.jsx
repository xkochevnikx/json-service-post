import React from "react";
import cls from "./MyButton.module.css";

export const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cls.button}>
      {children}
    </button>
  );
};


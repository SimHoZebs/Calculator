import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const BtnBase = (props: Props) => {
  const { className, children, ...rest } = props;

  let style = className ? " " + className : "";

  return (
    <button
      className={
        "font-medium bg-gray-300 dark:bg-gray-700 w-full h-full rounded-full text-3xl" +
        style
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default BtnBase;

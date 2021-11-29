import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const BtnBase = (props: Props) => {
  const { className, children, ...rest } = props;

  return (
    <button
      className={`font-medium bg-gray-300 dark:bg-gray-700 h-20 w-20 rounded-full text-3xl ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default BtnBase;

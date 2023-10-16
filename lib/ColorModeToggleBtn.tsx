import { Dispatch, SetStateAction } from "react";
import { dark } from "./Icons";
import { light } from "./Icons";

const ColorModeToggleBtn = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
  function toggleColorMode() {
    const classList = document.documentElement.classList;
    if (classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  }

  return (
    <button
      className="bg-purple-300 dark:bg-purple-400 py-2 px-3 dark:text-gray-900 rounded-md"
      onClick={toggleColorMode}
    >
      {isDarkMode ? dark : light}
    </button>
  );
};

export default ColorModeToggleBtn;

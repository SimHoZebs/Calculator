import { useState, useEffect } from "react";
import ColorModeToggleBtn from "../lib/ColorModeToggleBtn";
import Keypad from "../lib/Keypad";

export type Calc = {
  bracketIsClosing: boolean;
  funcDisabled: boolean;
  returnPressed: boolean;
  bracketCount: number;
};

export default function Home() {
  const [input, setInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [calc, setCalc] = useState({
    bracketIsClosing: false,
    funcDisabled: true,
    returnPressed: false,
    bracketCount: 0,
  });

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center font-roboto h-screen w-screen bg-gray-100 dark:bg-gray-800 p-2 text-gray-900 dark:text-gray-100">
      <section className="h-1/3 flex flex-col items-center">
        <div className="flex self-end">
          <ColorModeToggleBtn
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </div>
        <div className="w-full h-full rounded-lg flex justify-end p-3 m-3 items-end bg-gray-200 dark:bg-gray-600">
          <big className="text-7xl">
            {input.split("").map((char, index) => {
              if (
                calc.bracketCount !== 0 &&
                index >= input.length - calc.bracketCount
              ) {
                return (
                  <span key={index} className="text-gray-500">
                    {char}
                  </span>
                );
              } else {
                return <span key={index}>{char}</span>;
              }
            })}
          </big>
        </div>
      </section>

      <Keypad setInput={setInput} calc={calc} setCalc={setCalc} />
    </div>
  );
}

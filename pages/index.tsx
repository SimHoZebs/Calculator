import { useState, useEffect } from "react";
import ColorModeToggleBtn from "../lib/ColorModeToggleBtn";
import Keypad from "../lib/Keypad";

export default function Home() {
  const [input, setInput] = useState("");
  const [returnPressed, setReturnPressed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

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
          <big className="text-7xl">{input}</big>
        </div>
      </section>

      <Keypad
        setInput={setInput}
        returnPressed={returnPressed}
        setReturnPressed={setReturnPressed}
      />
    </div>
  );
}

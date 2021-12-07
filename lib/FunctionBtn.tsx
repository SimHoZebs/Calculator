import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BtnBase from "./BtnBase";
import { add, backspace, multiply, subtract } from "./Icons";
import { Keypad } from "./Keypad";

interface Props {
  function: string;
  setInput: Dispatch<SetStateAction<string>>;
  keypad: Keypad;
  setKeypad: Dispatch<SetStateAction<Keypad>>;
}

const FunctionBtn = (props: Props) => {
  const [icon, setIcon] = useState<JSX.Element | string>("");

  function btnPress() {
    switch (props.function) {
      case "AC":
        props.setInput("");
        break;
      case "DEL":
        props.setInput((prev) => prev.slice(0, -1));
        break;
      case "=":
        props.setInput((prev) => {
          try {
            return Function("return(" + prev + ")")();
          } catch (error) {
            return "invalid syntax";
          }
        });
        props.setKeypad((prev) => ({
          ...prev,
          funcDisabled: true,
          returnPressed: true,
        }));
        break;
      case "( )":
        props.setInput(
          (prev) => `${prev} ${props.keypad.bracketIsClosing ? ")" : "("} `
        );
        props.setKeypad((prev) => ({
          ...prev,
          bracketIsClosing: !prev.bracketIsClosing,
        }));
        break;
    }

    if (props.function === "+" || props.function === "-") {
      props.setInput((prev) => `${prev} ${props.function} `);
    } else if (props.function === "*" || props.function === "/") {
      if (!props.keypad.funcDisabled) {
        props.setInput((prev) => `${prev} ${props.function} `);
        props.setKeypad((prev) => ({ ...prev, funcDisabled: true }));
      }
    }
  }

  useEffect(() => {
    switch (props.function) {
      case "DEL":
        setIcon(backspace);
        break;
      case "+":
        setIcon(add);
        break;
      case "-":
        setIcon(subtract);
        break;
      case "*":
        setIcon(multiply);
        break;
      case "/":
        setIcon("÷");
        break;
      default:
        setIcon(props.function);
        break;
    }
  }, [props.function]);

  return (
    <BtnBase
      className="bg-purple-300 dark:bg-purple-400 text-gray-900 flex justify-center items-center"
      onClick={btnPress}
    >
      <div className="h-9 w-9">{icon}</div>
    </BtnBase>
  );
};

export default FunctionBtn;

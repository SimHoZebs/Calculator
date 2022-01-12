import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BtnBase from "./BtnBase";
import { add, backspace, multiply, subtract } from "./Icons";
import { handleInput } from "./Keypad";
import { Calc } from "../pages";

interface Props {
  function: string;
  setInput: Dispatch<SetStateAction<string>>;
  calc: Calc;
  setCalc: Dispatch<SetStateAction<Calc>>;
}

const FunctionBtn = (props: Props) => {
  const [icon, setIcon] = useState<JSX.Element | string>("");
  function resetKeypad() {
    props.setCalc((prev) => ({
      bracketIsClosing: false,
      basicOperationDisabled: false,
      bracketCount: 0,
      returnPressed: true,
      complexOperationDisabled: true,
    }));
  }

  function btnPress() {
    switch (props.function) {
      case "AC":
        props.setInput("");
        resetKeypad();
        break;

      case "DEL":
        props.setInput((prev) =>
          props.calc.bracketIsClosing
            ? prev.slice(0, -2) + ")"
            : prev.slice(0, -1)
        );
        break;

      case "=":
        props.setInput((prev) => {
          try {
            return `${Function("return(" + prev + ")")()}`;
          } catch (error) {
            return "invalid syntax";
          }
        });
        resetKeypad();
        break;

      case ")":
        props.setCalc((prev) => ({
          ...prev,
          bracketCount: prev.bracketCount === 0 ? 0 : prev.bracketCount - 1,
          bracketIsClosing: false,
        }));
        break;

      default:
        if (props.function === "(") {
          props.setCalc((prev) => ({
            ...prev,
            bracketCount: prev.bracketCount + 1,
          }));
        }

        if (
          (props.function !== "*" && props.function !== "/") ||
          !props.calc.complexOperationDisabled
        ) {
          handleInput(props.function, props.setInput, props.calc.bracketCount);
        }

        props.setCalc((prev) => ({
          ...prev,
          complexOperationDisabled: true,
          returnPressed: false,
        }));

        break;
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

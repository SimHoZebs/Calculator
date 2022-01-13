import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BtnBase from "./BtnBase";
import { add, backspace, multiply, subtract } from "./Icons";
import { CalcState } from "../pages";

interface Props {
  function: string;
  setInput: Dispatch<SetStateAction<string>>;
  calcState: CalcState;
  setCalcState: Dispatch<SetStateAction<CalcState>>;
  processForOutput: (input: string) => void;
}

const FunctionBtn = (props: Props) => {
  const [icon, setIcon] = useState<JSX.Element | string>("");
  function resetCalcState() {
    props.setCalcState((prev) => ({
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
        resetCalcState();
        break;

      case "DEL":
        if (props.calcState.bracketCount === 0) {
          props.setInput((prev) => prev.slice(0, -1));
        } else {
          props.setInput((prev) => {
            if (prev[prev.length - 1 - props.calcState.bracketCount] === "(") {
              props.setCalcState((prev) => ({
                ...prev,
                bracketCount: prev.bracketCount - 1,
              }));

              return (
                prev.slice(0, -1 - props.calcState.bracketCount) +
                ")".repeat(props.calcState.bracketCount - 1)
              );
            } else {
              return (
                prev.slice(0, -1 - props.calcState.bracketCount) +
                ")".repeat(props.calcState.bracketCount)
              );
            }
          });
        }
        break;

      case "=":
        props.setInput((prev) => {
          try {
            return `${Function("return(" + prev + ")")()}`;
          } catch (error) {
            return "invalid syntax";
          }
        });
        resetCalcState();
        break;

      case ")":
        props.setCalcState((prev) => ({
          ...prev,
          bracketCount: prev.bracketCount === 0 ? 0 : prev.bracketCount - 1,
          bracketIsClosing: false,
        }));
        break;

      default:
        if (props.function === "(") {
          props.setCalcState((prev) => ({
            ...prev,
            bracketCount: prev.bracketCount + 1,
          }));
        }

        if (
          (props.function !== "*" && props.function !== "/") ||
          !props.calcState.complexOperationDisabled
        ) {
          props.processForOutput(props.function);
        }

        props.setCalcState((prev) => ({
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

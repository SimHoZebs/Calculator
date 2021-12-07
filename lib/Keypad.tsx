import React, { Dispatch, SetStateAction, useState } from "react";
import NumBtn from "./NumBtn";
import FunctionBtn from "./FunctionBtn";
import { Calc } from "../pages";

interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  calc: Calc;
  setCalc: Dispatch<SetStateAction<Calc>>;
}

const Keypad = (props: Props) => {
  const numArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const topOperatoryArray = ["AC", "(", ")"];
  const operatorArray = ["=", "+", "-", "*", "/"].reverse();

  return (
    <section className="h-120vw max-h-27rem flex w-full max-w-21.5rem justify-center gap-x-2 self-center">
      <div className="grid grid-cols-3 grid-rows-5 w-3/4 flex-wrap content-start gap-2">
        {topOperatoryArray.map((operator, index) => (
          <FunctionBtn
            key={index}
            function={operator}
            setInput={props.setInput}
            calc={props.calc}
            setCalc={props.setCalc}
          />
        ))}

        {numArray.map((num) => (
          <NumBtn
            key={num}
            value={num}
            setInput={props.setInput}
            calc={props.calc}
            setCalc={props.setCalc}
          />
        ))}

        <FunctionBtn
          function="DEL"
          setInput={props.setInput}
          calc={props.calc}
          setCalc={props.setCalc}
        />
      </div>

      <div className="grid grid-rows-5 content-end gap-2 w-[calc(25%-0.5rem)]">
        {operatorArray.map((operator, index) => (
          <FunctionBtn
            key={index}
            function={operator}
            setInput={props.setInput}
            calc={props.calc}
            setCalc={props.setCalc}
          />
        ))}
      </div>
    </section>
  );
};

export function handleInput(
  input: string,
  setInput: Dispatch<SetStateAction<string>>,
  bracketCount: number
) {
  setInput((prev) => {
    if (input === "(") {
      input = "()";
    }

    if (bracketCount === 0) {
      return prev + input;
    } else {
      return (
        prev.slice(0, prev.length - bracketCount) +
        input +
        ")".repeat(bracketCount)
      );
    }
  });
}

export default Keypad;

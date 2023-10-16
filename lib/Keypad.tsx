import React, { Dispatch, SetStateAction, useState } from "react";
import NumBtn from "./NumBtn";
import FunctionBtn from "./FunctionBtn";
import { CalcState } from "../pages";

interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  calc: CalcState;
  setCalc: Dispatch<SetStateAction<CalcState>>;
  processForOutput: (input: string) => void;
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
            calcState={props.calc}
            setCalcState={props.setCalc}
            processForOutput={props.processForOutput}
          />
        ))}

        {numArray.map((num) => (
          <NumBtn
            key={num}
            value={num}
            setInput={props.setInput}
            calc={props.calc}
            setCalc={props.setCalc}
            convertToOutput={props.processForOutput}
          />
        ))}

        <FunctionBtn
          function="DEL"
          setInput={props.setInput}
          calcState={props.calc}
          setCalcState={props.setCalc}
          processForOutput={props.processForOutput}
        />
      </div>

      <div className="grid grid-rows-5 content-end gap-2 w-[calc(25%-0.5rem)]">
        {operatorArray.map((operator, index) => (
          <FunctionBtn
            key={index}
            function={operator}
            setInput={props.setInput}
            calcState={props.calc}
            setCalcState={props.setCalc}
            processForOutput={props.processForOutput}
          />
        ))}
      </div>
    </section>
  );
};

export default Keypad;

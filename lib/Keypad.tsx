import React, { useState } from "react";
import NumBtn from "./NumBtn";
import FunctionBtn from "./FunctionBtn";

interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setReturnPressed: React.Dispatch<React.SetStateAction<boolean>>;
  returnPressed: boolean;
}

const Keypad = (props: Props) => {
  const numArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const topOperatoryArray = ["AC", "( )", "%"];
  const operatorArray = ["=", "+", "-", "*", "/"].reverse();
  const [state, setState] = useState<boolean>(false);
  const bracket = { isClosing: state, setState: setState };

  return (
    <section className="h-120vw max-h-27rem flex w-full max-w-21.5rem justify-center gap-x-2 self-center">
      <div className="grid grid-cols-3 grid-rows-5 w-3/4 flex-wrap content-start gap-2">
        {topOperatoryArray.map((operator, index) => (
          <FunctionBtn
            key={index}
            function={operator}
            setInput={props.setInput}
            setReturnPressed={props.setReturnPressed}
            bracket={bracket}
          />
        ))}

        {numArray.map((num) => (
          <NumBtn
            key={num}
            value={num}
            setInput={props.setInput}
            setReturnPressed={props.setReturnPressed}
            returnPressed={props.returnPressed}
          />
        ))}

        <FunctionBtn
          function="DEL"
          setInput={props.setInput}
          setReturnPressed={props.setReturnPressed}
          bracket={bracket}
        />
      </div>

      <div className="grid grid-rows-5 content-end gap-2 w-[calc(25%-0.5rem)]">
        {operatorArray.map((operator, index) => (
          <FunctionBtn
            key={index}
            function={operator}
            setInput={props.setInput}
            setReturnPressed={props.setReturnPressed}
            bracket={bracket}
          />
        ))}
      </div>
    </section>
  );
};

export default Keypad;

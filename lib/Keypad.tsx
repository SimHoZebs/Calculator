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
  const operatorArray = ["=", "+", "-", "*", "/"];
  const [state, setState] = useState<boolean>(false);
  const bracket = { isClosing: state, setState: setState };

  return (
    <section className="h-2/3">
      <div className="flex flex-column gap-2 justify-center">
        <div className=" grid grid-cols-3 justify-end content-end gap-2">
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

        <div className="flex flex-wrap-reverse w-min content-end gap-2">
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
      </div>
    </section>
  );
};

export default Keypad;

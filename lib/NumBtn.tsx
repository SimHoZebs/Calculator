import React, { Dispatch, SetStateAction } from "react";
import BtnBase from "./BtnBase";
import { Keypad } from "./Keypad";

export interface Props {
  isOperator?: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  keypad: Keypad;
  setKeypad: Dispatch<SetStateAction<Keypad>>;
}

const NumBtn = (props: Props) => {
  function btnPress() {
    if (props.keypad.returnPressed) {
      props.setKeypad((prev) => ({ ...prev, returnPressed: false }));
      props.setInput(`${props.value}`);
    } else {
      props.setInput((prev) => prev + `${props.value}`);
    }
    props.setKeypad((prev) => ({ ...prev, funcDisabled: false }));
    if (props.keypad.bracketIsClosing) {
      props.setInput((prev) => {
        const splitInput = prev.split(")");
        console.log(splitInput);
        return splitInput[0] + splitInput[1] + ")";
      });
    }
  }
  return <BtnBase onClick={btnPress}>{props.value}</BtnBase>;
};

export default NumBtn;

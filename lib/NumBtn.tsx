import React, { Dispatch, SetStateAction } from "react";
import BtnBase from "./BtnBase";
import { handleInput, Keypad } from "./Keypad";

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
      handleInput(
        props.value.toString(),
        props.setInput,
        props.keypad.bracketCount
      );
    }
    props.setKeypad((prev) => ({ ...prev, funcDisabled: false }));
  }
  return <BtnBase onClick={btnPress}>{props.value}</BtnBase>;
};

export default NumBtn;

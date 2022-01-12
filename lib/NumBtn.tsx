import React, { Dispatch, SetStateAction } from "react";
import BtnBase from "./BtnBase";
import { handleInput } from "./Keypad";
import { Calc } from "../pages";

export interface Props {
  isOperator?: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  calc: Calc;
  setCalc: Dispatch<SetStateAction<Calc>>;
}

const NumBtn = (props: Props) => {
  function btnPress() {
    if (props.calc.returnPressed) {
      props.setCalc((prev) => ({ ...prev, returnPressed: false }));
      props.setInput(`${props.value}`);
    } else {
      handleInput(
        props.value.toString(),
        props.setInput,
        props.calc.bracketCount
      );
    }
    props.setCalc((prev) => ({ ...prev, complexOperationDisabled: false }));
  }
  return <BtnBase onClick={btnPress}>{props.value}</BtnBase>;
};

export default NumBtn;

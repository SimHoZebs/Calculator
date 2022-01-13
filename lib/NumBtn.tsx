import React, { Dispatch, SetStateAction } from "react";
import BtnBase from "./BtnBase";
import { CalcState } from "../pages";

export interface Props {
  isOperator?: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  calc: CalcState;
  setCalc: Dispatch<SetStateAction<CalcState>>;
  convertToOutput: (input: string) => void;
}

const NumBtn = (props: Props) => {
  function btnPress() {
    if (props.calc.returnPressed) {
      props.setCalc((prev) => ({ ...prev, returnPressed: false }));
      props.setInput(`${props.value}`);
    } else {
      props.convertToOutput(props.value.toString());
    }
    props.setCalc((prev) => ({ ...prev, complexOperationDisabled: false }));
  }
  return <BtnBase onClick={btnPress}>{props.value}</BtnBase>;
};

export default NumBtn;

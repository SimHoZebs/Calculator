import React from "react";
import BtnBase from "./BtnBase";

export interface Props {
  isOperator?: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  setReturnPressed: React.Dispatch<React.SetStateAction<boolean>>;
  returnPressed: boolean;
}

const NumBtn = (props: Props) => {
  function btnPress() {
    if (props.returnPressed) {
      props.setReturnPressed(false);
      props.setInput(`${props.value}`);
    } else {
      props.setInput((prev) => prev + `${props.value}`);
    }
  }
  return <BtnBase onClick={btnPress}>{props.value}</BtnBase>;
};

export default NumBtn;

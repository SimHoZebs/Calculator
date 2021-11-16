import React from "react"
import BtnBase from "./BtnBase"

interface Props {
  isOperator?: boolean
  setInput: React.Dispatch<React.SetStateAction<string>>
  value: string | number
}

const Button = (props: Props) => {
  return (
    <BtnBase onClick={() => props.setInput((prev) => prev + `${props.value}`)}>
      {props.value}
    </BtnBase>
  )
}

export default Button

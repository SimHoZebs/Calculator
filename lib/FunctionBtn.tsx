import React, { useEffect, useState } from "react"
import BtnBase from "./BtnBase"
import { add, backspace, multiply, questionMark, subtract } from "./Icons"

interface Props {
  function: string
  setInput: React.Dispatch<React.SetStateAction<string>>
}

const FunctionBtn = (props: Props) => {
  const [icon, setIcon] = useState<JSX.Element | string>(questionMark)
  const [isClosingBracket, setIsClosingBracket] = useState<boolean>(false)

  function btnPress() {
    switch (props.function) {
      case "AC":
        props.setInput("")
        break
      case "DEL":
        props.setInput((prev) => prev.slice(0, -1))
        break
      case "=":
        props.setInput((prev) => Function("return(" + prev + ")")())
        break
      case "( )":
        props.setInput((prev) => `${prev} ${isClosingBracket ? ")" : "("} `)
        setIsClosingBracket(!isClosingBracket)
        break
      default:
        props.setInput((prev) => `${prev} ${props.function} `)
        break
    }
  }

  useEffect(() => {
    switch (props.function) {
      case "DEL":
        setIcon(backspace)
        break
      case "+":
        setIcon(add)
        break
      case "-":
        setIcon(subtract)
        break
      case "*":
        setIcon(multiply)
        break
      case "/":
        setIcon("÷")
        break
      default:
        setIcon(props.function)
        break
    }
  }, [props.function])

  return (
    <BtnBase
      className="bg-purple-300 dark:bg-purple-400 text-gray-900 flex justify-center items-center"
      onClick={btnPress}
    >
      <div className="h-9 w-9 ">{icon}</div>
    </BtnBase>
  )
}

export default FunctionBtn

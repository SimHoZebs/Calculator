import React, { useEffect, useState } from "react"
import BtnBase from "./BtnBase"
import { add, backspace, multiply, questionMark, subtract } from "./Icons"

interface Props {
  function: string
  setInput: React.Dispatch<React.SetStateAction<string>>
  setReturnPressed: React.Dispatch<React.SetStateAction<boolean>>
  bracket: {
    isClosing: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const FunctionBtn = (props: Props) => {
  const [icon, setIcon] = useState<JSX.Element | string>(questionMark)

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
        props.setReturnPressed(true)
        break
      case "( )":
        props.setInput(
          (prev) => `${prev} ${props.bracket.isClosing ? ")" : "("} `
        )
        props.bracket.setState(!props.bracket.isClosing)
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

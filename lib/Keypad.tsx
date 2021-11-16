import React from "react"
import Button from "./NumBtn"
import FunctionBtn from "./FunctionBtn"

interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>
}

const Keypad = (props: Props) => {
  const numArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."]
  const topOperatoryArray = ["AC", "( )", "%"]
  const operatorArray = ["=", "+", "-", "*", "/"]

  return (
    <section className="h-2/3">
      <div className="flex flex-column gap-2 justify-center">
        <div className=" grid grid-cols-3 justify-end content-end gap-2">
          {topOperatoryArray.map((operator, index) => (
            <FunctionBtn
              key={index}
              function={operator}
              setInput={props.setInput}
            />
          ))}
          {numArray.map((num) => (
            <Button key={num} value={num} setInput={props.setInput} />
          ))}
          <FunctionBtn function="DEL" setInput={props.setInput} />
        </div>

        <div className="flex flex-wrap-reverse w-min content-end gap-2">
          {operatorArray.map((operator, index) => (
            <FunctionBtn
              key={index}
              function={operator}
              setInput={props.setInput}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keypad

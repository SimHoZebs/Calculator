import Button from "../lib/Button"
import ColorModeToggleBtn from "../lib/ColorModeToggleBtn"

export default function Home() {
  const numArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "DEL"]
  const topOperatoryArray = ["AC", "( )", "%"]
  const operatorArray = ["=", "+", "-", "*", "/"]
  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-800 p-2  text-gray-900 dark:text-gray-100">
      <section className="h-1/3 flex flex-col items-center">
        <div className="flex self-end">
          <ColorModeToggleBtn />
        </div>
        <div className="w-full h-full rounded-lg flex justify-end p-3 m-3 items-end bg-gray-200 dark:bg-gray-600">
          <big className="text-7xl">1+3</big>
        </div>
      </section>

      <section className="h-2/3">
        <div className="flex flex-column gap-2 justify-center">
          <div className=" grid grid-cols-3 justify-end content-end gap-2">
            {topOperatoryArray.map((operator, index) => (
              <Button key={index} isOperator>
                {operator}
              </Button>
            ))}
            {numArray.map((num) => (
              <Button key={num}>{num}</Button>
            ))}
          </div>

          <div className="flex flex-wrap-reverse w-min content-end gap-2">
            {operatorArray.map((operator, index) => (
              <Button key={index} isOperator>
                {operator}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

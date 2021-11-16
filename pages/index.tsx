import { useState } from "react"
import ColorModeToggleBtn from "../lib/ColorModeToggleBtn"
import Keypad from "../lib/Keypad"

export default function Home() {
  const [input, setInput] = useState("")

  return (
    <div className="font-roboto h-screen w-screen bg-gray-100 dark:bg-gray-800 p-2  text-gray-900 dark:text-gray-100">
      <section className="h-1/3 flex flex-col items-center">
        <div className="flex self-end">
          <ColorModeToggleBtn />
        </div>
        <div className="w-full h-full rounded-lg flex justify-end p-3 m-3 items-end bg-gray-200 dark:bg-gray-600">
          <big className="text-7xl">{input}</big>
        </div>
      </section>

      <Keypad setInput={setInput} />
    </div>
  )
}

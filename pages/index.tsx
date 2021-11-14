import Button from "../lib/Button"
import ColorModeToggleBtn from "../lib/ColorModeToggleBtn"

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-900 p-2">
      <div className="h-1/3">
        <div className="flex justify-end">
          <ColorModeToggleBtn />
        </div>
      </div>
      <div className="h-2/3">
        <Button>1</Button>
      </div>
    </div>
  )
}

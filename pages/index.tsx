import Button from "../lib/Button"

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-700 p-2">
      <div className="h-1/3">Top </div>
      <div className="h-2/3">
        <Button>1</Button>
      </div>
    </div>
  )
}

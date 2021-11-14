import React from "react"

interface Props {
  children: React.ReactNode
}

const Button = (props: Props) => {
  return (
    <button className="bg-gray-700 text-gray-100 h-20 w-20 rounded-full text-4xl">
      {props.children}
    </button>
  )
}

export default Button

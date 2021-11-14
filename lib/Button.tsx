import React from "react"

interface Props {
  children: React.ReactNode
  isOperator?: boolean
}

const Button = (props: Props) => {
  const numKeyColor =
    "bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100"

  const operatorColor = "bg-purple-300 dark:bg-purple-400 text-gray-900"

  return (
    <button
      className={`${
        props.isOperator ? operatorColor : numKeyColor
      } h-20 w-20 rounded-full text-4xl`}
    >
      {props.children}
    </button>
  )
}

export default Button

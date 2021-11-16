import React from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: React.ReactNode
}

const BtnBase = (props: Props) => {
  const { className, ...rest } = props

  return (
    <button
      className={`font-medium bg-gray-300 dark:bg-gray-700 h-20 w-20 rounded-full text-3xl ${props.className}`}
      {...rest}
    >
      {props.children}
    </button>
  )
}

export default BtnBase

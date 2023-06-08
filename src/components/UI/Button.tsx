import React from 'react'

interface props {
  children: React.ReactNode
}

const Button: React.FC<props> = ({ children }) => {
  return (
    <button className="rounded-md bg-sky-500 p-3 text-white shadow-2xl drop-shadow-xl">
      {children}
    </button>
  )
}

export default Button

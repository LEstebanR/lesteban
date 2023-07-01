import React from 'react'

interface props {
  children: React.ReactNode
}

const Button: React.FC<props> = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-primary to-secondary  text-black  p-2 border border-black rounded h-10 ">
      {children}
    </button>
  )
}

export default Button

import React from 'react'

interface props {
  children: React.ReactNode
}

const Button: React.FC<props> = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-700 text-white font-bold p-2 border border-black rounded shadow-lg shadow-blue-500/50 h-12">
      {children}
    </button>
  )
}

export default Button

import React from 'react'
import clsx from 'clsx'

interface props {
  children: React.ReactNode
  className?: string
}

const Button: React.FC<props> = ({ children, className }) => {
  return (
    <button
      className={clsx(
        'bg-primary text-white  p-2 border-2  border-black rounded h-10 dark:border-white',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button

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
        'h-10 rounded  border-2 border-black  bg-primary p-2 text-white dark:border-white',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button

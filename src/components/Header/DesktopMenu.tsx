import React, { FC } from 'react'

interface props {
  handleAboutClick: Function
  handleExperienceClick: Function
  handleProjectsClick: Function
}

const DesktopMenu: FC<props> = ({
  handleAboutClick,
  handleExperienceClick,
  handleProjectsClick,
}) => {
  const options = [
    {
      label: 'About',
      action: handleAboutClick,
    },
    {
      label: 'Experience',
      action: handleExperienceClick,
    },
    {
      label: 'Projects',
      action: handleProjectsClick,
    },
  ]
  return (
    <div className="hidden sm:block">
      <ul className="flex gap-3">
        {options.map((option) => (
          <p
            className="cursor-pointer text-xl text-sky-400"
            key={option.label}
            onClick={() => option.action()}
          >
            {option.label}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default DesktopMenu

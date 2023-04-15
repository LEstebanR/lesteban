import React, { FC } from 'react'
import { SlUser, SlScreenDesktop, SlFire, SlEnvolope } from 'react-icons/sl'

interface props {
  handleAboutClick: Function
  handleExperienceClick: Function
  handleProjectsClick: Function
  handleContactClick: Function
}

const MobileMenu: FC<props> = ({
  handleAboutClick,
  handleExperienceClick,
  handleProjectsClick,
  handleContactClick,
}) => {
  return (
    <div className="sm:hidden">
      <ul className="flex gap-4 text-3xl">
        <li className="cursor-pointer">
          <SlUser onClick={() => handleAboutClick} />
        </li>
        <li className="cursor-pointer">
          <SlScreenDesktop onClick={() => handleExperienceClick} />
        </li>
        <li className="cursor-pointer">
          <SlFire onClick={() => handleProjectsClick} />
        </li>
        <li className="cursor-pointer">
          <SlEnvolope onClick={() => handleContactClick} />
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu

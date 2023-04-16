import React, { FC } from 'react'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import Logo from '../Logo'

interface props {
  handleAboutClick: Function
  handleExperienceClick: Function
  handleProjectsClick: Function
  handleContactClick: Function
}

const Header: FC<props> = ({
  handleAboutClick,
  handleExperienceClick,
  handleProjectsClick,
  handleContactClick,
}) => {
  console.log(handleContactClick)
  return (
    <header className="sticky top-0 z-50 flex w-full justify-between items-center p-4 bg-white">
      <div onClick={() => handleAboutClick()}>
        <Logo />
      </div>
      <MobileMenu
        handleAboutClick={handleAboutClick}
        handleExperienceClick={handleExperienceClick}
        handleProjectsClick={handleProjectsClick}
        handleContactClick={handleContactClick}
      />
      <DesktopMenu
        handleAboutClick={handleAboutClick}
        handleExperienceClick={handleExperienceClick}
        handleProjectsClick={handleProjectsClick}
        handleContactClick={handleContactClick}
      />
    </header>
  )
}

export default Header

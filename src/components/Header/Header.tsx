import React, { FC } from 'react'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import Logo from '../Logo'

interface props {
  handleAboutClick: Function
  handleExperienceClick: Function
  handleProjectsClick: Function
}

const Header: FC<props> = ({
  handleAboutClick,
  handleExperienceClick,
  handleProjectsClick,
}) => {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-between items-center p-4 bg-white h-full">
      <div onClick={() => handleAboutClick()}>
        <Logo />
      </div>
      <MobileMenu
        handleAboutClick={handleAboutClick}
        handleExperienceClick={handleExperienceClick}
        handleProjectsClick={handleProjectsClick}
      />
      <DesktopMenu
        handleAboutClick={handleAboutClick}
        handleExperienceClick={handleExperienceClick}
        handleProjectsClick={handleProjectsClick}
      />
    </header>
  )
}

export default Header

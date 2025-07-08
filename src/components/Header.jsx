import React, { useState } from 'react'
import Navbar from './Navbar'

import { useTranslation } from 'react-i18next';




const Header = () => {
  const [navOpen, setNavopen] = useState(false)
  const { t, i18n } = useTranslation();

   const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <header className='fixed top-0 left-0 w-full  h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className='max-w-screen-2xl w-full  mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
        <h1>
          <a href="/" className='logo'>
            <img src="/images/logo.svg" alt="" width={40} height={40} />
          </a>
         

        </h1>

       
        <div className='relative md:justify-self-center'>
          <button className='menu-btn md:hidden ' onClick={() => setNavopen((prev) => !prev)}>
            <span className='material-symbols-rounded' >
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

         <div className=' flex items-center justify-center gap-1'>

          <button className='btn  max-md:hidden md:justify-self-center' onClick={() => changeLanguage('en')}>EN</button>
          <button className='btn  max-md:hidden md:justify-self-center' onClick={() => changeLanguage('ar')}>AR</button>
          <a href="#contect" className=' btn btn-secondary max-md:hidden md:justify-self-center'>{t("Contact Me")}</a>

        </div>


      </div>
    </header>
  )
}

export default Header
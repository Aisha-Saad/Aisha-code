
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';


import './i18n';


const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // تحديد الاتجاه بناءً على اللغة الحالية
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir; // <html dir="rtl" أو "ltr">
    document.body.lang = i18n.language; // اختياري: لتحديد اللغة
  }, [i18n.language]);

  
  return (
    <>
       <Header/>
        <main>
          <Hero/>
          <About/>
          <Skills/>
          <Work/>
          <Review/>
          <Contact/>
          
        </main>
        <Footer/>
    </>
   
  )
}

export default App
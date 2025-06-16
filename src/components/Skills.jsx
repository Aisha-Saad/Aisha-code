import React from 'react'
import SkilCard from './SkilCard';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Skills = () => {

  
  

  const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },


  ];

  const { t, i18n } = useTranslation();


  useEffect(() => {

    i18n.changeLanguage("en")

  }, [i18n]);
  return (
    <section className="section">
      <div className="container">
        <h2 className=" headline-2 ">{t(" Essential Tools use")}</h2>
        <p className=" to-zinc-400 mt-3 mb-8 max-w-[50ch]">
         {t(" Discover the powerful tools and technologies I use to create exceptional,high-performing websites & applications.")}

        </p>
        <div className=" grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkilCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
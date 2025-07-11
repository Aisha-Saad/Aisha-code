import React from 'react'
import { ButtonPrimary, ButtonOutline } from "./Button"
import { useTranslation } from 'react-i18next';


const Hero = () => {

     const { t} = useTranslation();
    return (

        <section id='home' className='pt-28 lg:pt-36'>
            <div className=" container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className='img-box w-9 h-9 rounded-lg'>
                            <img src="/images/avatar-1.jpg"
                                alt="Aisha"
                                width={40}
                                height={40}
                                className='img-cover'

                            />
                        </figure>
                        <div className="flex items-center gap-1.5 to-zinc-400 text-sm tracking-wide">
                            <span className=" relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className=" absolute inset-0  animate-ping rounded-full bg-emerald-400">

                                </span>

                            </span>
                           {t(' Available for work')}
                        </div>
                    </div>
                    <h2 className=" headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                       {t('Building scalable modern websites for the future' )}
                    </h2>
                    <div className="flex items-center gap-3 ">
                        <ButtonPrimary label="Download CV" icon="download" />
                        <ButtonOutline
                            
                            label="Scroll down"
                            icon="arrow_downward"
                            // href="#about"
                        />
                    </div>
                </div>
                <div className=" hidden lg:block">
                    <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25%
             via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                        <img src="/images/hero-banner.png"
                            alt="Aisha"
                            width={656}
                            height={800}
                            className='w-full'
                        />
                    </figure>
                </div>
            </div>


        </section>
    )
}

export default Hero
import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HeroChild from '../../components/HeroChild/HeroChild';

// Illustrations
import dove1 from '../../images/dove.svg';
import dove2 from '../../images/dove-2.svg';
import weapon from '../../images/weapon.svg';
import earth from '../../images/earth.svg';
import heart from '../../images/heart.svg';
import peaceSign from '../../images/peace-sign.svg';
import hand from '../../images/hand.svg';

const Header = () => {
    return (
        <Fragment>
            <div className="flex-col w-100 h-screen relative flex justify-center items-center overflow-hidden" id="index">
                <h1 className='flex text-center text-[#ffffff] font-regular py-5 z-10
                text-9xl xs:text-9xl sm:text-9xl md:text-9xl lg:text-[15rem] xl:text-[15rem]'>
                    Pokój
                </h1>
                <Link to="#quote" className='flex text-center text-[#ffffff] font-regular py-5 z-10
                    text-[5rem] xs:text-7xl sm:text-7xl md:text-7xl lg:text-[5rem] xl:text-[5rem] pt-10
                    animate-[bounce_1.2s_infinite]'>
                    ↓
                </Link>

                {/* Illustrations */}
                <HeroChild customClass='absolute w-auto 
                    h-[20rem] xs:h-[20rem] sm:h-[25rem] md:h-[25rem] lg:h-[25em] xl:h-[25rem] 2xl:h-[25rem]
                    top-[0em] xs:top-[-2rem] sm:top-0 md:top-[1em] lg:top-[1em] xl:top-[1em] 2xl:top-[1em]
                    left-[0rem] xs:left-[-1rem] sm:left-0 md:left-[10em] lg:left-[10em] xl:left-[7em] 2xl:left-[5em]
                    animate-wiggle ' 
                    img={weapon} alt="Ilustración" zindex="1"/>
                <HeroChild customClass='absolute w-auto 
                    h-[20rem] xs:h-[20rem] sm:h-[40rem] md:h-[40rem] lg:h-[40em] xl:h-[40rem] 2xl:h-[40rem]
                    bottom-[2rem] 
                    left-[-1rem] xs:left-[-1rem] sm:left-0 md:left-[10em] lg:left-[10em] xl:left-[3em] 2xl:left-[3em]
                    animate-spin-speed-45s' 
                    img={dove1} alt="Ilustración" zindex="2"/>
                <HeroChild customClass='absolute w-auto 
                    h-[15rem] 
                    bottom-[6rem] 
                    left-[37rem]
                    invisible xs:invisible sm:invisible md:invisible lg:invisible xl:invisible 2xl:visible
                    animate-spin-acw-speed-15s' 
                    img={heart} alt="Ilustración" zindex="1"
                    animate-spin-speed-3/>
                <HeroChild customClass='absolute w-auto 
                    h-[30rem] 
                    top-5 right-[40rem]
                    invisible xs:invisible sm:invisible md:invisible lg:invisible xl:invisible 2xl:visible
                    animate-wiggle-speed-15s' 
                    img={dove2} alt="Ilustración" zindex="1"/>
                <HeroChild customClass='absolute w-auto 
                    h-[23rem] 
                    bottom-[2rem] right-[33rem]
                    invisible xs:invisible sm:invisible md:invisible lg:invisible xl:invisible 2xl:visible
                    animate-spin-speed-45s'
                    img={earth} alt="Ilustración" zindex="1"/>
                <HeroChild customClass='absolute w-auto 
                    h-[15rem] xs:h-[15rem] sm:h-[25rem] md:h-[25rem] lg:h-[25em] xl:h-[25rem] 2xl:h-[25rem]
                    top-[4rem] xs:top-[4rem] sm:top-[4rem] md:top-[5rem] lg:top-[5rem] xl:top-[5rem] 2xl:top-[5rem]
                    right-[0rem] xs:right-[0rem] sm:right-[0rem] md:right-[5rem] lg:right-[5rem] xl:right-[5rem] 2xl:right-[5rem]
                    animate-spin-speed-35s'
                    img={peaceSign} alt="Ilustración" zindex="1"/>
                <HeroChild customClass='absolute w-auto 
                    h-[5rem] xs:h-[25rem] sm:h-[25rem] md:h-[35rem] lg:h-[35em] xl:h-[40rem] 2xl:h-[40rem]
                    bottom-5 xs:bottom-5 sm:bottom-5 md:bottom-5 lg:bottom-5 xl:bottom-5 2xl:bottom-5
                    right-[-1rem] xs:right-[-1rem] sm:right-[0rem] md:right-[5rem] lg:right-[5em] xl:right-[5rem] 2xl:right-[5rem]
                    animate-wiggle' 
                    img={hand} alt="Ilustración" zindex="1"/>
            </div>
        </Fragment>
    );
}

export default Header;
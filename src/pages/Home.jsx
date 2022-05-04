import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HeroChild from '../components/HeroChild/HeroChild';
import dove1 from '../images/dove.svg';
import dove2 from '../images/dove-2.svg';
import weapon from '../images/weapon.svg';
import earth from '../images/earth.svg';
import heart from '../images/heart.svg';
import peaceSign from '../images/peace-sign.svg';
import hand from '../images/hand.svg';
import MahatmaGandhi from '../images/mahatma-gandhi.svg';
import MahatmaGandhiScroll from '../images/mahatma-gandhi-scroll.svg';
import MahatmaGandhiScroll2 from '../images/mahatma-gandhi-scroll-2.svg';
import india from '../images/india.svg';
import indiaSymbol from '../images/india-symbol.svg';
// import indiaFlag from '../images/india-flag.svg';
import MalalaYousafzai from '../images/malala-yousafzai.svg';
import NelsonMandela from '../images/nelson-mandela.svg';

import TextoPathBox from '../components/TextoPathBox/TextoPathBox';
import HeroQuote from '../components/HeroQuote/HeroQuote';
import HeroCharacters from '../components/HeroCharacters/HeroCharacters';
import HeroBgScroller from '../components/HeroBgScroller/HeroBgScroller';
import HeroTwoColumns from '../components/HeroTwoColumns/HeroTwoColumns';


const Home = () => {
    const HeroCharactersImgs = [
        { id:'Mahatma Gandhi', link: "MahatmaGandhi1", img:{MahatmaGandhi}},
        { id:'Malala Yousafzai', link: "#", img:{MalalaYousafzai}},
        { id:'Nelson Mandela', link: "#",img:{NelsonMandela}},
    ];
    return (
        <Fragment>
            <div className="flex-col w-100 h-screen relative flex justify-center items-center" id="index">
                <h1 className='flex text-center text-[#ffffff] font-regular py-5 z-10
                text-9xl xs:text-9xl sm:text-9xl md:text-9xl lg:text-[15rem] xl:text-[15rem]'>
                    Pokój
                </h1>
                <Link to="#quote" className='flex text-center text-[#ffffff] font-regular py-5 z-10
                    text-[5rem] xs:text-7xl sm:text-7xl md:text-7xl lg:text-[5rem] xl:text-[5rem] pt-10
                    animate-[bounce_1.2s_infinite]'>
                    ↓
                </Link>
                <HeroChild customClass='absolute w-auto 
                    h-[25rem] xs:h-[25rem] sm:h-[25rem] md:h-[25rem] lg:h-[25em] xl:h-[25rem]
                    top-[1em] xs:top-[-6rem] sm:top-0 md:top-[1em] lg:top-[1em] xl:top-[1em]
                    left-[7em] xs:left-[-1rem] sm:left-0 md:left-[10em] lg:left-[10em] xl:left-[10em]
                    animate-wiggle ' 
                    img={weapon} alt="Ilustración" zindex="1" 
                />
                <HeroChild customClass='absolute w-auto 
                    h-[40rem] xs:h-[40rem] sm:h-[40rem] md:h-[40rem] lg:h-[40em] xl:h-[40rem]
                    bottom-[2rem] 
                    left-[7em] xs:left-[-1rem] sm:left-0 md:left-[10em] lg:left-[10em] xl:left-[3em]
                    animate-spin-speed-45s' 
                    img={dove1} alt="Ilustración" zindex="1"/>
                <HeroChild customClass='absolute w-auto 
                    h-[15rem] 
                    bottom-[6rem] 
                    left-[37rem]
                    animate-spin-acw-speed-15s' 
                    img={heart} alt="Ilustración" zindex="1"
                    animate-spin-speed-3/>
                <HeroChild customClass='absolute w-auto 
                    h-[30rem] 
                    top-5 right-[40rem]
                    invisible xs:invisible sm:invisible md:invisible lg:invisible xl:invisible 2xl:visible
                    animate-wiggle-speed-15s' 
                    img={dove2} alt="Ilustración" zindex="1"
                />
                <HeroChild customClass='absolute w-auto 
                    h-[23rem] 
                    bottom-[2rem] right-[33rem]
                    invisible xs:invisible sm:invisible md:invisible lg:invisible xl:invisible 2xl:visible
                    animate-spin-speed-45s'
                    img={earth} alt="Ilustración" zindex="1"
                />
                <HeroChild customClass='absolute w-auto 
                    h-[20rem] top-[5rem] right-[5rem]
                    animate-spin-speed-35s' 
                    img={peaceSign} alt="Ilustración" zindex="1"
                />
                <HeroChild customClass='absolute w-auto 
                    h-[45rem] bottom-5 right-[5rem]
                    animate-wiggle' 
                    img={hand} alt="Ilustración" zindex="1"
                />
            </div>
            {/* Marquee Peace */}
                <TextoPathBox text="Pokój 和平 Peace  سَلَامٌ   Paz 平穏 Friede 평화 Paix สันติภาพ Pace мир Vrede "/>
            {/* Quote */}
                <HeroQuote
                    quoteLine1='“Nie ma drogi do pokoju. To pokój jest drogą”' 
                    quoteLine2='No hay camino para la paz, la paz es el camino' 
                    author='Mahatma Gandhi' 
                    arrowLink='characters'
                    sectionId='quote'
                />
            {/* Characters */}
                <HeroCharacters 
                    HeroCharactersImgs={HeroCharactersImgs} 
                    sectionId={'characters'} 
                />
            {/* Mahatma Gandhi */}
                <HeroBgScroller 
                    textLine1='Kim był Mahatma Gandhi?'
                    textLine2='¿Quién fue Mahatma Gandhi?'
                    width='30%' 
                    height='30rem' 
                    bgImg={MahatmaGandhiScroll} 
                    bgAlt='Mahatma Gandhi'
                    bgImg2={MahatmaGandhiScroll2} 
                    bgAlt2='Mahatma Gandhi'
                    arrowLink='MahatmaGandhi2'
                    sectionId='MahatmaGandhi1'
                />
                <HeroTwoColumns 
                    img={india}
                    textLine1='Mahatma Gandhi był aktywistą, przywódcą duchowym i politycznym, czołową postacią wszystkich rewolucji pacyfistycznych. Urodził się w Porbandar w Indiach w 1869 roku.'
                    textLine2='Mahatma Gandhi fue un activista, líder espiritual y político, referente máximo de todas las revoluciones pacifistas. Nació en Porbandar, India en 1869.'
                    arrowLink='MahatmaGandhi1'
                    imgAnimation='animate-wiggle'
                />
                <HeroTwoColumns 
                    img={indiaSymbol}
                    textLine1='Mahatma Gandhi sprzeciwiał się brytyjskiemu kolonializmowi i przewodził Indyjskiemu Ruchowi Niepodległości. Jego metody to pokojowy opór i niestosowanie przemocy.'
                    textLine2='Se opuso al colonialismo británico y dirigió el Movimiento de Independencia Indio. Sus métodos eran la resistencia pacífica y la no violencia.'
                    arrowLink='MahatmaGandhi1'
                    customClass='flex-row-reverse'
                    imgAnimation='animate-spin-speed-45s'
                />
        </Fragment>
    );
}

export default Home;
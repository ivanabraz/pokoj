import React, { Fragment} from 'react';
import Marquee from 'react-marquee-master';
import HeroChild from '../components/HeroChild/HeroChild';
import dove1 from '../images/dove.svg';
import dove2 from '../images/dove-2.svg';
import weapon from '../images/weapon.svg';
import earth from '../images/earth.svg';
import heart from '../images/heart.svg';
import peaceSign from '../images/peace-sign.svg';
import hand from '../images/hand.svg';
import MahatmaGandhi from '../images/mahatma-gandhi.svg';
import india from '../images/india.svg';
import indiaSymbol from '../images/india-symbol.svg';
// import indiaFlag from '../images/india-flag.svg';
import MalalaYousafzai from '../images/malala-yousafzai.svg';
import NelsonMandela from '../images/nelson-mandela.svg';

import TextoPathBox from '../components/TextoPathBox/TextoPathBox';
import MarqueeItems from '../components/MarqueeItems/MarqueeItems';

function Home() {
    const marqueeItems = MarqueeItems;

    return (
        <Fragment>
            <div className="flex-col w-100 h-screen relative flex justify-center items-center" id="index">
                <h1 className='flex text-center text-[#ffffff] font-regular py-5 z-10
                text-[15rem] xs:text-9xl sm:text-9xl md:text-9xl lg:text-[15rem] xl:text-[15rem]'>
                    Pokój
                </h1>
                <p className='flex text-center text-[#ffffff] font-regular py-5 z-10
                    text-[5rem] xs:text-7xl sm:text-7xl md:text-7xl lg:text-[5rem] xl:text-[5rem]'>
                    ↓
                </p>
                <HeroChild 
                    customClass='absolute w-auto 
                    h-[5rem] xs:h-[30rem] sm:h-[30rem] md:h-[30rem] lg:h-[30rem] xl:h-[30rem]
                    top-[1em] xs:top-[-6rem] sm:top-0 md:top-[1em] lg:top-[1em] xl:top-[1em]
                    left-[13em] xs:left-[-1rem] sm:left-0 md:left-[13em] lg:left-[13em] xl:left-[13em]
                    animate-spin-speed-45s' 
                    img={weapon} alt="Ilustración" zindex="1" 
                />
                <HeroChild 
                    customClass='absolute w-auto h-[43rem] bottom-[4rem] left-[8rem]
                    animate-spin-acw-speed-65s' 
                    img={dove1} alt="Ilustración" zindex="1"/>
                <HeroChild 
                    customClass='absolute w-auto h-[20rem] bottom-[6rem] left-[50rem]' 
                    img={heart} alt="Ilustración" zindex="1"
                    animate-spin-speed-3/>
                <HeroChild 
                    customClass='absolute w-auto h-[30rem] top-5 right-[40rem]
                    invisible xs:invisible sm:invisible md:invisible lg:invisible xl:invisible 2xl:visible' 
                    img={dove2} alt="Ilustración" zindex="1"
                />
                <HeroChild 
                    customClass='absolute w-auto h-[25rem] bottom-[5rem] right-[45rem]
                    invisible xs:invisible sm:invisible md:invisible lg:invisible xl:invisible 2xl:visible'
                    img={earth} alt="Ilustración" zindex="1"
                />
                <HeroChild 
                    customClass='absolute w-auto h-[20rem] top-[5rem] right-[5rem]' 
                    img={peaceSign} alt="Ilustración" zindex="1"
                />
                <HeroChild 
                    customClass='absolute w-auto h-[45rem] bottom-5 right-[10rem]' 
                    img={hand} alt="Ilustración" zindex="1"
                />
            </div>
            {/* Marquee Peace */}
                <TextoPathBox/>
            {/* Quote */}
            <div className="flex-col w-full h-[80vh] flex justify-center items-center content-center" id="section1">
                <p className='text-center text-[#ffffff] font-medium
                text-4xl'>
                    “Nie ma drogi do pokoju. To pokój jest drogą”
                </p>
                <p className='text-center text-[#ffffff] font-thin italic
                text-2xl'>
                    “No hay camino para la paz, la paz es el camino”
                </p>
                <p className='text-center text-[#ffffff] font-light pt-10
                text-2xl'>
                    Mahatma Gandhi
                </p>
                <p className='flex text-center text-[#bcbec0] font-regular mt-10 z-10 text-4xl'>
                    ↓
                </p>
            </div>
            {/* Characters */}
            <div className="flex flex-row flex-wrap w-100 h-fit items-center justify-center overflow-hidden p-20" id="section2">
                <div className='justify-center text-center mx-20 my-1'>
                    <img className="w-52 h-auto" src={MahatmaGandhi} alt="Mahatma Gandhi" />
                    <p className='text-center text-[#ffffff] font-light pt-1 text-xl'>Mahatma<br/>Gandhi</p>
                </div>
                <div className='justify-center text-center mx-20 my-1'>
                    <img className="w-52 h-auto" src={MalalaYousafzai} alt="Malala Yousafzai" />
                    <p className='text-center text-[#ffffff] font-light pt-1 text-xl'>Malala<br/>Yousafzai</p>
                </div>
                <div className='justify-center text-center mx-20 my-1'>
                    <img className="w-52 h-auto" src={NelsonMandela} alt="Nelson Mandela" />
                    <p className='text-center text-[#ffffff] font-light pt-1 text-xl'>Nelson<br/>Mandela</p>
                </div>
            </div>
            {/* Mahatma Gandhi */}
            <div className="flex w-100 h-[80vh] relative items-center justify-center overflow-hidden" id="sectionGhandi">
                <Marquee 
                    marqueeContainerClassName="relative h-full w-full max-w-100
                    px-0 xs:px-0 sm:px-0 md:px-24 lg:px-24 xl:px-24"
                    marqueeClassName="w-100 flex flex-auto flex-row justify-between relative"
                    marqueeItems={marqueeItems} delay="20"
                />
                <div className='w-[50%] absolute z-10 items-center justify-center tex-center'>
                    <p className='text-center text-[#bcbec0] font-light p-5 text-xl bg-[#000]'>
                        Kim był <span className='text-[#ffffff]'>Mahatma Gandhi</span>?<br/>
                        <span className='italic'>¿Quién fue <span className='text-[#ffffff]'>Mahatma Gandhi</span></span>?
                    </p>
                    <p className='text-center text-[#bcbec0] font-light p-5 text-xl'>
                        ↓
                    </p>
                </div>
            </div>
            <div className="flex w-100 h-[80vh] relative items-center justify-center overflow-hidden" id="sectionGhandi">
                <img 
                    className="w-[110%] xs:w-[110%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-auto absolute z-1" 
                    src={india} alt="Mahatma Gandhi"
                />
                <div className='w-[50%] absolute z-10 items-center justify-center tex-center'>
                    <p className='text-center text-[#bcbec0] font-light p-5 text-xl bg-[#000]'>
                        Mahatma Gandhi fue un activista, líder espiritual y político, referente máximo de todas las revoluciones pacifistas. Nació en Porbandar, India en 1869. 
                    </p>
                    <p className='text-center text-[#bcbec0] font-light p-5 text-xl'>
                        ↓
                    </p>
                </div>
            </div>
            <div className="flex w-100 h-[80vh] relative items-center justify-center overflow-hidden" id="sectionGhandi">
                <img 
                    className="w-[110%] xs:w-[110%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-auto absolute z-1 animate-spin-speed-45s" 
                    src={indiaSymbol} alt="Mahatma Gandhi"
                />
                <div className='w-[50%] absolute z-10 items-center justify-center tex-center'>
                    <p className='text-center text-[#bcbec0] font-light p-5 text-xl bg-[#000]'>
                        Se opuso al colonialismo británico y dirigió el Movimiento de Independencia Indio. Sus métodos eran la resistencia pacífica y la no violencia. 
                    </p>
                    <p className='text-center text-[#bcbec0] font-light p-5 text-2xl animate-bounce'>
                        ↓
                    </p>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
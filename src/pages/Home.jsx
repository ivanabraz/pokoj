import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import TextoPathBox from '../components/TextoPathBox/TextoPathBox';
import HeroQuote from '../components/HeroQuote/HeroQuote';
import HeroCharacters from '../components/HeroCharacters/HeroCharacters';
import HeroBgScroller from '../components/HeroBgScroller/HeroBgScroller';
import HeroTwoColumns from '../components/HeroTwoColumns/HeroTwoColumns';
import Header from '../components/Header/Header';

// Illustrations
import MahatmaGandhiScrollImg1 from '../images/mahatma-gandhi-scroll.svg';
import MahatmaGandhiScrollImg2 from '../images/mahatma-gandhi-scroll-2.svg';
import MalalaYousafzaiScrollImg1 from '../images/mahatma-gandhi-scroll.svg';
import MalalaYousafzaiScrollImg2 from '../images/mahatma-gandhi-scroll-2.svg';
import NelsonMandelaScrollImg1 from '../images/mahatma-gandhi-scroll.svg';
import NelsonMandelaScrollImg2 from '../images/mahatma-gandhi-scroll-2.svg';
import india from '../images/india.svg';
import indiaSymbol from '../images/india-symbol.svg';

const Home = () => {
    const HeroCharactersImgs = [
        { id:'Mahatma Gandhi', link: "MahatmaGandhi-1", img:"https://raw.githubusercontent.com/ivanabraz/pokoj/a864bc38501769e1f2dea64858d1d871f15caa97/src/images/mahatma-gandhi.svg"},
        { id:'Malala Yousafzai', link: "MalalaYousafzai-1", img:"https://raw.githubusercontent.com/ivanabraz/pokoj/a864bc38501769e1f2dea64858d1d871f15caa97/src/images/malala-yousafzai.svg"},
        { id:'Nelson Mandela', link: "NelsonMandela-1",img:"https://raw.githubusercontent.com/ivanabraz/pokoj/a864bc38501769e1f2dea64858d1d871f15caa97/src/images/nelson-mandela.svg"},
    ];

    return (
        <Fragment>
            <Header/>
            {/* Marquee Peace */}
                <TextoPathBox 
                    text="Pokój 和平 Peace Paz 平穏 Friede 평화 Paix สันติภาพ Pace мир Vrede "
                />
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
                    height='80vh' 
                    bgImg={MahatmaGandhiScrollImg1} 
                    bgAlt='Mahatma Gandhi'
                    bgImg2={MahatmaGandhiScrollImg2} 
                    bgAlt2='Mahatma Gandhi'
                    arrowLink='MahatmaGandhi-2'
                    sectionId='MahatmaGandhi-1'
                />
                <HeroTwoColumns 
                    img={india}
                    textLine1='Mahatma Gandhi był aktywistą, przywódcą duchowym i politycznym, czołową postacią wszystkich rewolucji pacyfistycznych. Urodził się w Porbandar w Indiach w 1869 roku.'
                    textLine2='Mahatma Gandhi fue un activista, líder espiritual y político, referente máximo de todas las revoluciones pacifistas. Nació en Porbandar, India en 1869.'
                    arrowLink='MahatmaGandhi-3'
                    sectionId='MahatmaGandhi-2'
                    imgAnimation='animate-wiggle'
                />
                <HeroTwoColumns 
                    img={indiaSymbol}
                    textLine1='Mahatma Gandhi sprzeciwiał się brytyjskiemu kolonializmowi i przewodził Indyjskiemu Ruchowi Niepodległości. Jego metody to pokojowy opór i niestosowanie przemocy.'
                    textLine2='Se opuso al colonialismo británico y dirigió el Movimiento de Independencia Indio. Sus métodos eran la resistencia pacífica y la no violencia.'
                    arrowLink='MalalaYousafzai-1'
                    sectionId='MahatmaGandhi-3'
                    customClass='flex-row-reverse'
                    imgAnimation='animate-spin-speed-45s'
                />
            {/* Malala Yousafzai */}
            <HeroBgScroller 
                    textLine1='Kim jest Malala Yousafzai?'
                    textLine2='¿Quién es Malala Yousafzai?'
                    width='30%' 
                    height='80vh' 
                    bgImg={MalalaYousafzaiScrollImg1} 
                    bgAlt='Malala Yousafzai'
                    bgImg2={MalalaYousafzaiScrollImg2} 
                    bgAlt2='Malala Yousafzai'
                    arrowLink='MalalaYousafzai-2'
                    sectionId='MalalaYousafzai-1'
                />
            <HeroTwoColumns 
                img={india}
                textLine1='Mahatma Gandhi był aktywistą, przywódcą duchowym i politycznym, czołową postacią wszystkich rewolucji pacyfistycznych. Urodził się w Porbandar w Indiach w 1869 roku.'
                textLine2='Mahatma Gandhi fue un activista, líder espiritual y político, referente máximo de todas las revoluciones pacifistas. Nació en Porbandar, India en 1869.'
                arrowLink='MalalaYousafzai-3'
                sectionId='MalalaYousafzai-2'
                imgAnimation='animate-wiggle'
            />
            <HeroTwoColumns 
                img={indiaSymbol}
                textLine1='Mahatma Gandhi sprzeciwiał się brytyjskiemu kolonializmowi i przewodził Indyjskiemu Ruchowi Niepodległości. Jego metody to pokojowy opór i niestosowanie przemocy.'
                textLine2='Se opuso al colonialismo británico y dirigió el Movimiento de Independencia Indio. Sus métodos eran la resistencia pacífica y la no violencia.'
                arrowLink='NelsonMandela-1'
                sectionId='MalalaYousafzai-3'
                customClass='flex-row-reverse'
                imgAnimation='animate-spin-speed-45s'
            />
            {/* Nelson Mandela */}
            <HeroBgScroller 
                    textLine1='Kim był Nelson Mandela?'
                    textLine2='¿Quién fue Nelson Mandela?'
                    width='30%' 
                    height='80vh' 
                    bgImg={NelsonMandelaScrollImg1} 
                    bgAlt='Nelson Mandela'
                    bgImg2={NelsonMandelaScrollImg2} 
                    bgAlt2='Nelson Mandela'
                    arrowLink='NelsonMandela-2'
                    sectionId='NelsonMandela-1'
                />
            <HeroTwoColumns 
                img={india}
                textLine1='Mahatma Gandhi był aktywistą, przywódcą duchowym i politycznym, czołową postacią wszystkich rewolucji pacyfistycznych. Urodził się w Porbandar w Indiach w 1869 roku.'
                textLine2='Mahatma Gandhi fue un activista, líder espiritual y político, referente máximo de todas las revoluciones pacifistas. Nació en Porbandar, India en 1869.'
                arrowLink='MahatmaGandhi-3'
                sectionId='MahatmaGandhi-2'
                imgAnimation='animate-wiggle'
            />
            <HeroTwoColumns 
                img={indiaSymbol}
                textLine1='Mahatma Gandhi sprzeciwiał się brytyjskiemu kolonializmowi i przewodził Indyjskiemu Ruchowi Niepodległości. Jego metody to pokojowy opór i niestosowanie przemocy.'
                textLine2='Se opuso al colonialismo británico y dirigió el Movimiento de Independencia Indio. Sus métodos eran la resistencia pacífica y la no violencia.'
                arrowLink='MalalaYousafzai-1'
                sectionId='MahatmaGandhi-3'
                customClass='flex-row-reverse'
                imgAnimation='animate-spin-speed-45s'
            />
        </Fragment>
    );
}

export default Home;
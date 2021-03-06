import React, { Fragment } from 'react';
import TextoPathBox from '../components/TextoPathBox/TextoPathBox';
import HeroQuote from '../components/HeroQuote/HeroQuote';
import HeroCharacters from '../components/HeroCharacters/HeroCharacters';
import HeroBgScroller from '../components/HeroBgScroller/HeroBgScroller';
import HeroTwoColumns from '../components/HeroTwoColumns/HeroTwoColumns';
import Header from '../components/Header/Header';
import CharatersButton from '../components/CharactersButton/CharactersButton';

// Illustrations
import MahatmaGandhiScrollImg1 from '../images/mahatma-gandhi-scroll.svg';
import MahatmaGandhiScrollImg2 from '../images/mahatma-gandhi-scroll-2.svg';
import MalalaYousafzaiScrollImg1 from '../images/malala-yousafzai-scroll.svg';
import MalalaYousafzaiScrollImg2 from '../images/malala-yousafzai-scroll-2.svg';
import NelsonMandelaScrollImg1 from '../images/nelson-mandela-scroll.svg';
import NelsonMandelaScrollImg2 from '../images/nelson-mandela-scroll-2.svg';
import india from '../images/india.svg';
import indianFlag from '../images/indian-flag.svg';
import indiaSymbol from '../images/india-symbol.svg';
import pakistan from '../images/pakistan.svg';
import nobelPrice from '../images/nobel-price.svg';
import fist from '../images/clenched-right-fist.svg';
import southAfricaFlag from '../images/south-africa-flag.svg';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const HeroCharactersImgs = [
        { id:'Mahatma Gandhi', link: "MahatmaGandhi-1", img:"https://raw.githubusercontent.com/ivanabraz/pokoj/a864bc38501769e1f2dea64858d1d871f15caa97/src/images/mahatma-gandhi.svg"},
        { id:'Malala Yousafzai', link: "MalalaYousafzai-1", img:"https://raw.githubusercontent.com/ivanabraz/pokoj/a864bc38501769e1f2dea64858d1d871f15caa97/src/images/malala-yousafzai.svg"},
        { id:'Nelson Mandela', link: "NelsonMandela-1",img:"https://raw.githubusercontent.com/ivanabraz/pokoj/a864bc38501769e1f2dea64858d1d871f15caa97/src/images/nelson-mandela.svg"},
    ];

    return (
        <Fragment>
            <Header/>
            <CharatersButton/>
            {/* Marquee Peace */}
                <TextoPathBox 
                    text="Pok??j????????????Peace Paz????????????Friede????????????Paix??????????????????????????????Pace????????????Vrede???"
                    reverse="true"
                    textColor='#ffffff'
                    bgColor='#466BA6'
                />
            {/* Quote */}
                <HeroQuote
                    quoteLine1='???Nie ma drogi do pokoju. To pok??j jest drog?????' 
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
            {/* Marquee Peace */}
            <TextoPathBox 
                    text="Pok??j????????????Peace Paz????????????Friede????????????Paix??????????????????????????????Pace????????????Vrede???"
                    reverse="false"
                    textColor='#ffffff'
                    bgColor='#CE4425'
                />
            {/* Mahatma Gandhi */}
                <HeroBgScroller 
                    textLine1='Kim by?? Mahatma Gandhi?'
                    textLine2='??Qui??n fue Mahatma Gandhi?'
                    width='100%' 
                    height='100vh'
                    bgImg={MahatmaGandhiScrollImg1} 
                    bgAlt='Mahatma Gandhi'
                    bgImg2={MahatmaGandhiScrollImg2} 
                    bgAlt2='Mahatma Gandhi'
                    arrowLink='MahatmaGandhi-2'
                    sectionId='MahatmaGandhi-1'
                />
                <HeroTwoColumns 
                    img={india}
                    textLine1='Mahatma Gandhi by?? aktywist??, przyw??dc?? duchowym i politycznym, czo??ow?? postaci?? wszystkich rewolucji pacyfistycznych. Urodzi?? si?? w Porbandar w Indiach w 1869 roku.'
                    textLine2='Mahatma Gandhi fue un activista, l??der espiritual y pol??tico, referente m??ximo de todas las revoluciones pacifistas. Naci?? en Porbandar, India en 1869.'
                    arrowLink='MahatmaGandhi-3'
                    sectionId='MahatmaGandhi-2'
                    imgAnimation='animate-wiggle'
                />
                <HeroTwoColumns 
                    img={indiaSymbol}
                    textLine1='Mahatma Gandhi sprzeciwia?? si?? brytyjskiemu kolonializmowi i przewodzi?? Indyjskiemu Ruchowi Niepodleg??o??ci. Jego metody to pokojowy op??r i niestosowanie przemocy.'
                    textLine2='Se opuso al colonialismo brit??nico y dirigi?? el Movimiento de Independencia Indio. Sus m??todos eran la resistencia pac??fica y la no violencia.'
                    arrowLink='MalalaYousafzai-1'
                    sectionId='MahatmaGandhi-3'
                    customClass='flex-row-reverse'
                    imgAnimation='animate-spin-speed-45s'
                />
                <div className='w-screen h-fit relative'>
                    <img src={indianFlag} alt="Indian Flag" className=''/>
                </div>
            {/* Malala Yousafzai */}
                <HeroBgScroller 
                        textLine1='Kim jest Malala Yousafzai?'
                        textLine2='??Qui??n es Malala Yousafzai?'
                        width='100%' 
                        height='100vh' 
                        bgImg={MalalaYousafzaiScrollImg1} 
                        bgAlt='Malala Yousafzai'
                        bgImg2={MalalaYousafzaiScrollImg2} 
                        bgAlt2='Malala Yousafzai'
                        arrowLink='MalalaYousafzai-2'
                        sectionId='MalalaYousafzai-1'
                    />
                <HeroTwoColumns 
                    img={pakistan}
                    textLine1='Malala Yousafzai jest pakista??sk?? aktywistk??, kt??ra walczy w obronie prawa dziewcz??t do edukacji w obliczu zakazu na??o??onego przez re??im talib??w.'
                    textLine2='Malala Yousafzai es una activista pakistan?? quien lucha por defender el derecho a la educaci??n de las ni??as, ante la prohibici??n del r??gimen talib??n.'
                    arrowLink='MalalaYousafzai-3'
                    sectionId='MalalaYousafzai-2'
                    imgAnimation='animate-wiggle'
                />
                <HeroTwoColumns 
                    img={nobelPrice}
                    textLine1='Malala jest Pos??anniczk?? Pokoju ONZ i jako najm??odsza osoba otrzyma??a Pokojow?? Nagrod?? Nobla w 2014 roku, maj??c zaledwie 17 lat.'
                    textLine2='Malala es Mensajera de la Paz de las Naciones Unidas y se convirti?? en la persona m??s joven en recibir el Premio Nobel de la Paz, en 2014 con tan s??lo 17 a??os.'
                    arrowLink='NelsonMandela-1'
                    sectionId='MalalaYousafzai-3'
                    customClass='flex-row-reverse'
                    imgAnimation='animate-spin-speed-45s'
                />
            {/* Nelson Mandela */}
                <TextoPathBox 
                        text='"Odwa??ni ludzie nie boj?? si?? wybacza?? aby osi??gn???? pok??j." ??? Nelson Mandela???'
                        reverse="true"
                        textColor='#ffffff'
                        bgColor='#466BA6'
                    />
                <HeroBgScroller 
                        textLine1='Kim by?? Nelson Mandela?'
                        textLine2='??Qui??n fue Nelson Mandela?'
                        width='100%' 
                        height='100vh' 
                        bgImg={NelsonMandelaScrollImg1} 
                        bgAlt='Nelson Mandela'
                        bgImg2={NelsonMandelaScrollImg2} 
                        bgAlt2='Nelson Mandela'
                        arrowLink='NelsonMandela-2'
                        sectionId='NelsonMandela-1'
                    />
                <TextoPathBox 
                        text='"Las personas valientes no tienen miedo de perdonar para alcanzar la paz." ??? Nelson Mandela???'
                        reverse="true"
                        textColor='#ffffff'
                        bgColor='#ED9C93'
                    />
                <HeroTwoColumns 
                    img={southAfricaFlag}
                    textLine1='Nelson Mandela by?? prawnikiem zajmuj??cym si?? prawami cz??owieka XX i XXI wieku, kt??ry pokojowo walczy?? z segregacj?? rasow?? w RPA (apartheid) i ustanowi?? demokratyczny model w tym samym pa??stwie.'
                    textLine2='Nelson Mandela fue abogado defensor de derechos humanos del siglo XX y XXI que luch?? pac??ficamente contra la segregaci??n racial en Sud??frica (apartheid) e instaur?? un modelo democr??tico en el mismo Estado.'
                    arrowLink='NelsonMandela-3'
                    sectionId='NelsonMandela-2'
                    imgAnimation='animate-wiggle'
                />
                <HeroTwoColumns 
                    img={fist}
                    textLine1='Nelson Mandela przebywa?? w wi??zieniu przez 27 lat, w dniu zwolnienia podni??s?? pi?????? jako wolny cz??owiek. Zaci??ni??ta pi?????? sta??a si?? symbolem oporu przeciwko ruchowi przeciw apartheidowi i jest znana na ca??ym ??wiecie.'
                    textLine2='Nelson Mandela permaneci?? en la c??rcel durante 27 a??os, el d??a en que fue liberado alz?? su pu??o como hombre libre. El pu??o cerrado se convirti?? en un s??mbolo de la resistencia contra el movimiento antiapartheid y es conocido en todo el mundo.'
                    arrowLink='end'
                    sectionId='NelsonMandela-3'
                    customClass='flex-row-reverse'
                    imgAnimation='animate-spin-speed-45s'
                />
            {/* End */}
            <div className='text-center py-[15em] px-10' id="end">
                <p className='text-[4rem]'>
                    <span className='text-[#466BA6]'>Z??az </span>
                    <span className='text-[#CE4425]'>??wi??tego </span>
                    <span className='text-[#E4A85A]'>Jerzego </span>
                    <span className='text-[#22876A]'>2022</span>
                </p>
                <p className='text-[#ffffff] text-[2rem]'>
                    Harcerstwo Argentyna
                </p>
            </div>
            {/* Footer */}
            <Footer/>
        </Fragment>
    );
}

export default Home;
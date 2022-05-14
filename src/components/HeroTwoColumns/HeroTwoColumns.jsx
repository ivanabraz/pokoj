import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const HeroTwoColumns = (HeroTwoColumnsProps) => {

    return (
        <div id={HeroTwoColumnsProps.sectionId} className={`flex flex-wrap w-100 
        h-[100vh] xs:h-[100vh] sm:h-[90vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[70vh] 
        items-center justify-center text-center ${HeroTwoColumnsProps.customClass}`}>
            <div className='flex w-[50%] justify-center text-center'>
                <img 
                    className={`w-[100%] xs:w-[110%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[50%] h-auto ${HeroTwoColumnsProps.imgAnimation}`}
                    src={HeroTwoColumnsProps.img} alt="Mahatma Gandhi"
                />
            </div>
            <div className='flex flex-col w-[35%] xs:w-[100%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] h-auto p-20 justify-center text-center'>
                <p className='text-[#ffffff] font-light text-xl '>
                    {HeroTwoColumnsProps.textLine1}
                </p>
                <p className='text-[#bcbec0] font-light text-xl pt-5'>
                    {HeroTwoColumnsProps.textLine2}
                </p>
                <Link to={`#${HeroTwoColumnsProps.arrowLink}`} className='text-[#bcbec0] font-regular z-10 text-4xl pt-10 animate-[bounce_1.2s_infinite]'>
                    ↓
                </Link>
            </div>
    </div>
    );
}

export default HeroTwoColumns;



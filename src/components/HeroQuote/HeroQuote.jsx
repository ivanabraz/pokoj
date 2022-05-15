import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function HeroQuote(HeroQuoteProps) {
    return (
        <Fragment>
            <div className="flex-col w-full h-[70vh] flex justify-center items-center content-center p-12" id={HeroQuoteProps.sectionId}>
                <p className='text-center text-[#ffffff] font-medium
                text-4xl pt-20'>
                    {HeroQuoteProps.quoteLine1}
                </p>
                <p className='text-center text-[#ffffff] font-thin italic
                text-2xl'>
                    {HeroQuoteProps.quoteLine2}
                </p>
                <p className='text-center text-[#ffffff] font-light pt-10
                text-2xl'>
                    {HeroQuoteProps.author}
                </p>
                <Link to={`#${HeroQuoteProps.arrowLink}`} className='flex text-center text-[#bcbec0] font-regular mt-10 z-10 text-4xl pt-10 animate-[bounce_1.2s_infinite]'>
                    ↓
                </Link>
            </div>
        </Fragment>
    );
}

export default HeroQuote;
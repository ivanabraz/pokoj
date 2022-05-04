import React, { Fragment } from 'react';
import Marquee from 'react-easy-marquee';
import { HashLink as Link } from 'react-router-hash-link';

function HeroBgScroller(HeroBgScrollerProps) {
    return (
        <Fragment>
            <div className="flex w-100 h-[90vh] relative items-center justify-center overflow-hidden" id={HeroBgScrollerProps.sectionId}>
                <Marquee
                    duration={10000}
                    background="#000"
                    height={HeroBgScrollerProps.height}
                    width={HeroBgScrollerProps.width}
                    axis="Y"
                    align="center"
                    pauseOnHover={false}
                    reverse={false}
                >
                    <img src={HeroBgScrollerProps.bgImg} alt={HeroBgScrollerProps.bgAlt}/>
                </Marquee>
                <Marquee
                    duration={10000}
                    background="#000"
                    height={HeroBgScrollerProps.height}
                    width={HeroBgScrollerProps.width}
                    axis="Y"
                    align="center"
                    pauseOnHover={false}
                    reverse={false}
                >
                    <img src={HeroBgScrollerProps.bgImg2} alt={HeroBgScrollerProps.bgAlt2}/>
                </Marquee>

                <div className='w-max absolute z-10 items-center justify-center text-center bg-[#000] p-5'>
                    <p className='text-[#ffffff] font-light text-xl '>
                        {HeroBgScrollerProps.textLine1}
                    </p>
                    <p className='text-[#bcbec0] font-light text-xl'>
                        {HeroBgScrollerProps.textLine2}
                    </p>
                    <Link 
                        to={`#${HeroBgScrollerProps.arrowLink}`} 
                        className='text-[#bcbec0] font-regular z-10 text-4xl 
                        pt-10 animate-[bounce_1.2s_infinite]'
                    >
                        ↓
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}

export default HeroBgScroller;



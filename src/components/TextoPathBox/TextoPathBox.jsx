import React, { Fragment } from 'react';
import Marquee from 'react-marquee-master';

const TextoPathBox = () => {
    const marqueeItems = [
        <p className='text-[15rem] xs:text-9xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-[10rem] '>Pokój 和平 Peace سَلَامٌ  Paz 平穏 Friede 평화 Paix สันติภาพ Pace мир Vrede </p>,
    ]
            return(
                <Fragment>
                    <div className='text-[#000] bg-[#bcbec0] py-10'>
                    <Marquee 
                            marqueeContainerClassName="relative flex w-full justify-center items-center content-center min-h-fit"
                            marqueeClassName="w-full h-fit flex flex-auto flex-row"
                            marqueeItems={marqueeItems} delay="20"
                            direction="left"
                        />
                        </div>
                </Fragment>
            )
}

export default TextoPathBox;

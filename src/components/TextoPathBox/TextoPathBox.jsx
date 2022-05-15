import React, { Fragment } from 'react';
import Marquee from 'react-easy-marquee';

const TextoPathBox = (TextoPathBoxProps) => {
            return(
                <Fragment>
                    <Marquee duration={70000} axis="X" reverse={TextoPathBoxProps.reverse} background={TextoPathBoxProps.bgColor} height="250px" width="90%" className='rounded-full m-auto overflow-hidden'>
                        <p className={`text-[${TextoPathBoxProps.textColor}] text-[15rem] xs:text-9xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-[10rem]`}>{TextoPathBoxProps.text}</p>
                    </Marquee>
                </Fragment>
            )
}

export default TextoPathBox;

import React, { Fragment } from 'react';
import Marquee from 'react-easy-marquee';

const TextoPathBox = (TextoPathBoxProps) => {
            return(
                <Fragment>
                    <div className='w-[100%] xs:w-[100%] sm:w-[100%] md:w-[80%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] flex m-auto justify-center overflow-hidden'>
                        <Marquee duration={70000} axis="X" reverse={TextoPathBoxProps.reverse} background={TextoPathBoxProps.bgColor} height="250px" width="100%" className='m-auto texto-path-box--styles
                        rounded-none xs:rounded-none sm:rounded-none md:rounded-full lg:rounded-full xl:rounded-full 2xl:rounded-full'>
                            <p className={`text-[${TextoPathBoxProps.textColor}] text-9xl xs:text-9xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-[10rem]`}>{TextoPathBoxProps.text}</p>
                        </Marquee>
                    </div>
                </Fragment>
            )
}

export default TextoPathBox;

import React, { Fragment } from 'react';

const HeroChild = (HeroChild) => {
    return (
        <Fragment>
            <img className={HeroChild.customClass}
            src={HeroChild.img} alt={HeroChild.alt}
            style={{zIndex: HeroChild.zindex}}/>
        </Fragment>
    )
}

export default HeroChild;
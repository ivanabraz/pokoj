import React from 'react';

const HeroImage = (HeroImageProps) => {
    return (
        <div id={HeroImageProps.id} className={HeroImageProps.customClass}>
            {HeroImageProps.children}
        </div>
    )
}

export default HeroImage;
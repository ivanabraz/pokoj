import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const HeroCharacters = ({HeroCharactersImgs}) => {

    return (
        <div id="characters" className="flex flex-row flex-wrap w-100 h-[100vh] h-fit items-center justify-center overflow-hidden p-20" >
            {HeroCharactersImgs.map((characters) => (
                <div key={characters.id} className='justify-center text-center mx-20 my-1 transition ease-in-out hover:scale-105 duration-300'>
                    <Link to={`#${characters.link}`}>
                        <img className="w-52 h-auto" src={characters.img} alt={characters.id}/>
                        <p className='text-center text-[#ffffff] font-light pt-1 text-xl'>{characters.id}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default HeroCharacters;



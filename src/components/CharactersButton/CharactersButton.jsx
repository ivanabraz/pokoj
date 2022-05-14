import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import button from '../../images/characters.svg';


const CharactersButton = () => {
    return (
            <div className='fixed bottom-0 right-0 w-[4rem] m-5 z-50 transition ease-in-out hover:scale-110 duration-300'>
                <Link to='#characters'>
                    <img 
                        src={button}
                        alt="Back to characters"
                    />
                </Link>
            </div>
    );
}

export default CharactersButton;
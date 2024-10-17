import React  from 'react';
import { BACKGROUND } from './utils/constants';
import GptSearchBar from './GptSearchBar';

const GptSearchContainer=()=>  {

        return (
            <div>
            <div className='fixed -z-10'>
             <img src={BACKGROUND} alt="bg"/>
            </div>
            <GptSearchBar/>
            </div>
           
    
        );
}

export default GptSearchContainer;
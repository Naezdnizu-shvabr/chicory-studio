import React from 'react';
import Slider from '../../features/slider/Slider';

const SliderBlock= ({topAnime, title}) => {
    return (
        <div className='popular'>
            <h2 className='popular__title'>{title}</h2>
            <Slider topAnime={topAnime}/>
        </div>
    );
}

export default SliderBlock;

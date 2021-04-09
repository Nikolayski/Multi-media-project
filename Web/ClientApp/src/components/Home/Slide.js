import React, { useState } from 'react';
import SwiftSlider from 'react-swift-slider'

const Slide = (props) => {
    const data = [];
    for (var i = 0; i < props.images.length; i++) {
        data.push({'id': `${i+1}`, 'src': `${props.images[i]}`})
    }

   
    return (
        <div className="slider-wrapper">
            <SwiftSlider data={data} height={props.height} interval={2000} enableNextAndPrev={ false} />
        </div>
    )
}

export default Slide;
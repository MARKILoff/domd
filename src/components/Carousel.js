import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

export default function Carousel() {
    return (
        <Splide>
            <SplideSlide>
                <img src="image1.jpg" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
                <img src="image2.jpg" alt="Image 2" />
            </SplideSlide>
        </Splide>
    )
}


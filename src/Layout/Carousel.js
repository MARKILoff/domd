import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import images1 from '../images/image 69.png';
import images2 from '../images/image02.svg';
import images3 from '../images/image01.svg';
import images4 from '../images/image0.svg';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

const Carousel = () => {
    return (
        <div>
            <Splide
                options={{
                    rewind: true,
                    perPage: 4,
                    perMove: 1,
                    gap: '1rem',
                }}>
                <SplideSlide>
                    <img src={images1} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={images2} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={images3} alt="Image 3" />
                </SplideSlide>
                <SplideSlide>
                    <img src={images4} alt="Image 4" />
                </SplideSlide>
                <SplideSlide>
                    <img src={images1} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={images2} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={images3} alt="Image 3" />
                </SplideSlide>
                <SplideSlide>
                    <img src={images4} alt="Image 4" />
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Carousel;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const MySlider = ({ slides }: { slides: string[] }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4500,
        pauseOnHover: true,
    };

    return (
        <Slider {...settings} className="flex flex-auto border-collapse">
            {slides.map((slide, index) => (
                <img key={index} src={slide} className="w-full object-cover filter drop-shadow-md dark:drop-shadow-light md:drop-shadow-lg" alt={`Slide ${index + 1}`} />
            ))}
        </Slider>
    );
};
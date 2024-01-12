"use client"
import { useState, useEffect } from 'react';

export const MySlider = ({ slides }: { slides: string[] }) => {

    return (
        <div className="carousel w-full">
            {slides.map((slide, index) => (
                <div key={index} id={slide} className="carousel-item relative w-full">
                    <img src={slide} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#${slides[(index - 1) >= 0 ? (index - 1) : slides.length - 1]}`} className="btn btn-circle">❮</a>
                        <a href={`#${slides[(index + 1) > slides.length - 1 ? 0 : (index + 1)]}`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

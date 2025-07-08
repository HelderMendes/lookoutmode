'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const allImages = Array.from({ length: 13 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, '0');
    return `/zomerSlider/${num}.png`;
});

const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

const InfiniteSlider = () => {
    const [images, setImages] = useState(() => shuffle([...allImages]));
    const [key, setKey] = useState(0); // to force animation restart

    // Restart and reshuffle after animation ends
    useEffect(() => {
        const interval = setInterval(() => {
            setImages(shuffle([...allImages]));
            setKey((prev) => prev + 1); // changing key restarts animation
        }, 20000); // same as animation duration

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative w-full h-[120px] overflow-hidden'>
            <div
                key={key}
                className='absolute top-0 left-0 flex gap-4 animate-slideLTR'
            >
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        width={70}
                        height={100}
                        className='object-contain mx-6'
                    />
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;

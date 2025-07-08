'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const allImages = Array.from({ length: 13 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, '0');
    return `/zomerSlider/${num}.png`;
});

const shuffle = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
};

const InfiniteSlider = () => {
    const [images, setImages] = useState<string[]>([]);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        // Initial shuffle
        setImages(shuffle(allImages));

        // Timer to reshuffle and restart animation
        const interval = setInterval(() => {
            setImages(shuffle(allImages)); // reshuffle
            setAnimationKey((prev) => prev + 1); // restart animation by changing key
        }, 20000); // match your animation duration (20s)

        return () => clearInterval(interval);
    }, []);

    if (images.length === 0) return null;

    return (
        <div className='relative w-full h-[100px] overflow-hidden'>
            <div
                key={animationKey}
                className='absolute top-0 left-0 flex gap-4 animate-slideLTR'
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className='relative w-[100px] h-[100px] mx-6'
                    >
                        <Image
                            src={src}
                            alt={`Slide ${index}`}
                            fill
                            className='object-contain'
                            priority
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;

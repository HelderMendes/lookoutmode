'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface Slide {
    id: number;
    image: string;
    titleKey: string;
    descriptionKey: string;
}

const slideTitles = Array.from({ length: 8 }, (_, i) => ({
    titleKey: `home.hero.title${i + 1}`,
    descriptionKey: `home.hero.desc${i + 1}`,
}));

function getFormattedImage(index: number): string {
    const numStr = index.toString().padStart(2, '0');
    return `/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–${numStr}.jpg`;
}

// Generate 33 shuffled image indices (01–33)
const shuffledImages = Array.from({ length: 33 }, (_, i) => i + 1)
    .map((n) => ({ n, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ n }) => getFormattedImage(n));

const slides: Slide[] = shuffledImages.map((image, index) => ({
    id: index + 1,
    image,
    ...slideTitles[index % slideTitles.length],
}));
export function HeroSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t } = useLanguage();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className='relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[75vh] 2xl:h-[85vh] 3xl:h-[95vh] overflow-hidden'>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        'absolute inset-0 transition-opacity duration-1000',
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    <div className='relative w-full h-full'>
                        <Image
                            src={slide.image}
                            alt={t(slide.titleKey)}
                            fill
                            className='object-cover'
                            priority={index === 0}
                        />
                        <div className='absolute inset-0 bg-black/30' />

                        {/* Content overlay */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='text-center text-white max-w-4xl px-4'>
                                <h1 className='font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6'>
                                    {t(slide.titleKey)}
                                </h1>
                                <p className='text-lg md:text-xl lg:text-2xl mb-8 opacity-90'>
                                    {t(slide.descriptionKey)}
                                </p>
                                <Button
                                    size='lg'
                                    className='bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg'
                                >
                                    {t('home.hero.button')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation buttons */}
            <Button
                variant='ghost'
                size='icon'
                className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                onClick={prevSlide}
            >
                <ChevronLeft className='w-6 h-6' />
            </Button>
            <Button
                variant='ghost'
                size='icon'
                className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                onClick={nextSlide}
            >
                <ChevronRight className='w-6 h-6' />
            </Button>

            {/* Slide indicators */}
            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2'>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            'w-3 h-3 rounded-full transition-all duration-300',
                            index === currentSlide ? 'bg-white' : 'bg-white/50'
                        )}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

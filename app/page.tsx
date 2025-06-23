'use client';

import Link from 'next/link';
import { ArrowRight, Heart, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HeroSlideshow } from '@/components/HeroSlideshow';
import { useSeasonal } from '@/contexts/SeasonalContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
    const { currentSeason } = useSeasonal();
    const { t } = useLanguage();

    return (
        <div className='pt-16'>
            {/* Hero Section */}
            <HeroSlideshow />

            {/* Philosophy Section */}
            <section className={`seasonal-bg-${currentSeason} py-20`}>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h2 className='font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8'>
                        {t('home.philosophy.title')}
                    </h2>
                    <div className='prose prose-lg mx-auto text-gray-700'>
                        <p className='text-xl leading-relaxed mb-6'>
                            {t('home.philosophy.text1')}
                        </p>
                        <p className='text-lg leading-relaxed'>
                            {t('home.philosophy.text2')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                        <div className='text-center group'>
                            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors'>
                                <Heart className='w-8 h-8 text-gray-700' />
                            </div>
                            <h3 className='font-playfair text-xl font-semibold text-gray-900 mb-4'>
                                {t('home.features.curated.title')}
                            </h3>
                            <p className='text-gray-600 leading-relaxed'>
                                {t('home.features.curated.desc')}
                            </p>
                        </div>

                        <div className='text-center group'>
                            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors'>
                                <Sparkles className='w-8 h-8 text-gray-700' />
                            </div>
                            <h3 className='font-playfair text-xl font-semibold text-gray-900 mb-4'>
                                {t('home.features.seasonal.title')}
                            </h3>
                            <p className='text-gray-600 leading-relaxed'>
                                {t('home.features.seasonal.desc')}
                            </p>
                        </div>

                        <div className='text-center group'>
                            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors'>
                                <Users className='w-8 h-8 text-gray-700' />
                            </div>
                            <h3 className='font-playfair text-xl font-semibold text-gray-900 mb-4'>
                                {t('home.features.personal.title')}
                            </h3>
                            <p className='text-gray-600 leading-relaxed'>
                                {t('home.features.personal.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Collection */}
            <section className='py-20 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            {t('home.featured.title')}
                        </h2>
                        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                            {t('home.featured.subtitle')}
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                        {[
                            {
                                title: 'Catherine André',
                                descriptionKey: 'home.featured.brand1.desc',
                                image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
                            },
                            {
                                title: 'Diega',
                                descriptionKey: 'home.featured.brand2.desc',
                                image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
                            },
                            {
                                title: 'Oska',
                                descriptionKey: 'home.featured.brand3.desc',
                                image: 'https://images.pexels.com/photos/1845331/pexels-photo-1845331.jpeg?auto=compress&cs=tinysrgb&w=800',
                            },
                        ].map((item, index) => (
                            <Card
                                key={index}
                                className='group hover:shadow-lg transition-shadow duration-300'
                            >
                                <CardContent className='p-0'>
                                    <div className='aspect-[4/3] relative overflow-hidden rounded-t-lg'>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                        />
                                    </div>
                                    <div className='p-6'>
                                        <h3 className='font-playfair text-xl font-semibold text-gray-900 mb-2'>
                                            {item.title}
                                        </h3>
                                        <p className='text-gray-600 text-sm'>
                                            {t(item.descriptionKey)}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className='text-center'>
                        <Button
                            asChild
                            size='lg'
                            className='bg-gray-900 hover:bg-gray-800'
                        >
                            <Link
                                href='/actueel'
                                className='inline-flex items-center'
                            >
                                {t('home.featured.button')}
                                <ArrowRight className='ml-2 w-4 h-4' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useSeasonal } from '@/contexts/SeasonalContext';
import { useLanguage } from '@/contexts/LanguageContext';

const clothingBrands = [
    'Catherine André',
    'Injiri',
    'Diega',
    'Hannoh',
    'In bed with you',
    'Just in Case',
    'Maison de Soil',
    'Majestic',
    'MII',
    'Oska',
    'Raga',
    'Pomandère',
    'Roberto Collina',
    'Transit',
    'Xirena',
    'Zenggi',
    'Vive la Difference',
];

const shawlBrands = [
    'Catherine André',
    'Diega',
    'Sarti',
    'Scarf',
    'Tapis Noir',
];
const bagBrands = ['Foodbag Foundation', 'En Shalla', 'Vive la Difference'];
const jewelryBrands = ['Trovelore', 'MC Ensemble', 'Mooi Matters', 'Sharing'];
const shoeBrands = ['Chie Mihara', 'Moma'];

const clothingBrandImages = clothingBrands.map(
    (_, i) =>
        `/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum–${
            17 + i
        }.jpg`
);

// const brandImages = clothingBrands.map(
//     (_, index) => _ // This is a placeholder function to generate image paths;
// );
// const clothingBrandImages = () => {
//     const index = Math.floor(Math.random() * clothingBrands.length);
//     const baseUrl = `/images/LookOutMode_zomer-2025_kledingcollectie-in-Bussum-${
//         index + 1
//     }.jpg`;
//     return `baseUrl`;
// };

export default function Actueel() {
    const { currentSeason } = useSeasonal();
    const { t } = useLanguage();

    return (
        <div className='pt-16'>
            {/* Hero Section */}
            <section className={`seasonal-bg-${currentSeason} py-20`}>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h1 className='font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
                        {t('current.title')}
                    </h1>
                    <p className='text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto'>
                        {t('current.subtitle')}
                    </p>
                </div>
            </section>

            {/* Main Collection */}
            <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='mb-16'>
                        <h2 className='font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center'>
                            {t('current.brands.title')}
                        </h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {clothingBrands.map((brand, index) => (
                                <Card
                                    key={brand}
                                    className='group hover:shadow-lg transition-all duration-300 cursor-pointer'
                                >
                                    <CardContent className='p-6 text-center aspect-[4/3] relative overflow-hidden rounded-t-lg mb-4'>
                                        {/* <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors'></div>
                                        <h3 className='font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors'>
                                        {brand}
                                        </h3>
                                        
                                        <div className='aspect-[4/3] relative overflow-hidden rounded-t-lg mb-4'> */}
                                        <Image
                                            src={clothingBrandImages[index]}
                                            alt={brand}
                                            fill
                                            className='object-cover group-hover:scale-105 transition-transform duration-300'
                                        />
                                        <div className='absolute inset-0 bg-black/20 flex items-start justify-center opacity'>
                                            <span className='font-playfair text-2xl font-extrabold text-white drop-shadow pt-4 text-amber-400/90'>
                                                {brand}
                                            </span>
                                        </div>
                                        {/* </div> */}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <Separator className='my-16' />

                    {/* Specialized Categories */}
                    <div className='space-y-16'>
                        {/* Shawls */}
                        <div>
                            <h3 className='font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-8'>
                                {t('current.shawls.title')}
                            </h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {shawlBrands.map((brand, index) => (
                                    <Card
                                        key={brand}
                                        className='group hover:shadow-lg transition-shadow duration-300'
                                    >
                                        <CardContent className='p-0'>
                                            <div className='aspect-[4/3] relative overflow-hidden rounded-t-lg'>
                                                <Image
                                                    src={`https://images.pexels.com/photos/${
                                                        1926769 + index
                                                    }/pexels-photo-${
                                                        1926769 + index
                                                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                                                    alt={brand}
                                                    fill
                                                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                                                />
                                            </div>
                                            <div className='p-6'>
                                                <h4 className='font-playfair text-xl font-semibold text-gray-900 mb-2'>
                                                    {brand}
                                                </h4>
                                                <Badge
                                                    variant='secondary'
                                                    className='text-xs'
                                                >
                                                    {t('category.shawls')}
                                                </Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Bags */}
                        <div>
                            <h3 className='font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-8'>
                                {t('current.bags.title')}
                            </h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {bagBrands.map((brand, index) => (
                                    <Card
                                        key={brand}
                                        className='group hover:shadow-lg transition-shadow duration-300'
                                    >
                                        <CardContent className='p-0'>
                                            <div className='aspect-[4/3] relative overflow-hidden rounded-t-lg'>
                                                <Image
                                                    src={`https://images.pexels.com/photos/${
                                                        1174746 + index
                                                    }/pexels-photo-${
                                                        1174746 + index
                                                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                                                    alt={brand}
                                                    fill
                                                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                                                />
                                            </div>
                                            <div className='p-6'>
                                                <h4 className='font-playfair text-xl font-semibold text-gray-900 mb-2'>
                                                    {brand}
                                                </h4>
                                                <Badge
                                                    variant='secondary'
                                                    className='text-xs'
                                                >
                                                    {t('category.bags')}
                                                </Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Jewelry */}
                        <div>
                            <h3 className='font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-8'>
                                {t('current.jewelry.title')}
                            </h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                                {jewelryBrands.map((brand, index) => (
                                    <Card
                                        key={brand}
                                        className='group hover:shadow-lg transition-shadow duration-300'
                                    >
                                        <CardContent className='p-0'>
                                            <div className='aspect-square relative overflow-hidden rounded-t-lg'>
                                                <Image
                                                    src={`https://images.pexels.com/photos/${
                                                        1447562 + index
                                                    }/pexels-photo-${
                                                        1447562 + index
                                                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                                                    alt={brand}
                                                    fill
                                                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                                                />
                                            </div>
                                            <div className='p-6'>
                                                <h4 className='font-playfair text-lg font-semibold text-gray-900 mb-2'>
                                                    {brand}
                                                </h4>
                                                <Badge
                                                    variant='secondary'
                                                    className='text-xs'
                                                >
                                                    {t('category.jewelry')}
                                                </Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Shoes */}
                        <div>
                            <h3 className='font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-8'>
                                {t('current.shoes.title')}
                            </h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                {shoeBrands.map((brand, index) => (
                                    <Card
                                        key={brand}
                                        className='group hover:shadow-lg transition-shadow duration-300'
                                    >
                                        <CardContent className='p-0'>
                                            <div className='aspect-[4/3] relative overflow-hidden rounded-t-lg'>
                                                <Image
                                                    src={`https://images.pexels.com/photos/${
                                                        1458318 + index
                                                    }/pexels-photo-${
                                                        1458318 + index
                                                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                                                    alt={brand}
                                                    fill
                                                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                                                />
                                            </div>
                                            <div className='p-6'>
                                                <h4 className='font-playfair text-xl font-semibold text-gray-900 mb-2'>
                                                    {brand}
                                                </h4>
                                                <Badge
                                                    variant='secondary'
                                                    className='text-xs'
                                                >
                                                    {t('category.shoes')}
                                                </Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collection Story */}
            <section className='py-20 bg-gray-50'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h2 className='font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
                        {t('current.story.title')}
                    </h2>
                    <div className='prose prose-lg mx-auto text-gray-700'>
                        <p className='text-lg leading-relaxed mb-6'>
                            {t('current.story.text1')}
                        </p>
                        <p className='text-lg leading-relaxed mb-6'>
                            {t('current.story.text2')}
                        </p>
                        <p className='text-lg leading-relaxed'>
                            {t('current.story.text3')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

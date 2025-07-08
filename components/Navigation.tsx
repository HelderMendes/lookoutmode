'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.current'), href: '/actueel' },
        { name: t('nav.archive'), href: '/archief' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ',
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm'
                    : 'bg-transparent'
            )}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 z-40'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <Link
                        href='/'
                        className='flex items-center space-x-2 group'
                    >
                        {/* <Sparkles className='w-6 h-6 text-gray-800 group-hover:text-gray-600 transition-colors' /> */}
                        <span className='font-playfair text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors relative'>
                            <Image
                                src='/LookOutMode_logo.png'
                                alt='LookOut Mode Logo'
                                width={250}
                                height={90}
                                className='object-cover'
                                priority
                            />
                            {/* LookOut Mode */}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    'text-sm font-medium transition-colors duration-200',
                                    pathname === item.href
                                        ? 'text-gray-900 border-b-2 border-gray-900'
                                        : 'text-gray-600 hover:text-gray-900'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden flex items-center space-x-2'>
                        <LanguageSwitcher />
                        <button
                            className='p-2 rounded-md text-gray-600 hover:text-gray-900'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className='w-6 h-6' />
                            ) : (
                                <Menu className='w-6 h-6' />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg'>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                                        pathname === item.href
                                            ? 'text-gray-900 bg-gray-100'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SeasonalProvider } from '@/contexts/SeasonalContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import BkgAnimation from '@/components/BkgAnimation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
});

export const metadata: Metadata = {
    title: 'LookOut Mode - Boutique Fashion Store | Bussum, Netherlands',
    description:
        'Discover authentic trends and curated designer brands for women at LookOut Mode. Located in Bussum, Netherlands. Independent fashion boutique with seasonal collections.',
    keywords:
        'fashion, boutique, designer brands, women fashion, Bussum, Netherlands, seasonal collections',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='nl' className={`${inter.variable} ${playfair.variable}`}>
            <body className='font-inter antialiased'>
                <BkgAnimation />
                <LanguageProvider>
                    <SeasonalProvider>
                        <Navigation />
                        <main className='pt-4 min-h-screen'>{children}</main>
                        <Footer />
                    </SeasonalProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}

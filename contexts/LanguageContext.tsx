'use client';

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';

type Language = 'nl' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    nl: {
        // Navigation
        'nav.home': 'Home',
        'nav.current': 'Actueel',
        'nav.archive': 'Archief Collecties',
        'nav.contact': 'Contact',

        // Home page
        'home.hero.title1': 'Zomer Collectie 2025',
        'home.hero.desc1':
            'Ontdek onze zorgvuldig samengestelde collectie van levendige zomerstukken',
        'home.hero.title2': 'Authentieke Trends',
        'home.hero.desc2':
            'Unieke designermerken met kwaliteitsmaterialen en seizoenskleuren',
        'home.hero.title3': 'Gecureerde Mode',
        'home.hero.desc3':
            'Verrassende en inspirerende collecties van onafhankelijke ontwerpers',
        'home.hero.title4': 'Zomerse Elegantie',
        'home.hero.desc4':
            'Verrijk je garderobe met stijlvolle stukken voor warme dagen',
        'home.hero.title5': 'Duurzame Keuzes',
        'home.hero.desc5':
            'Milieuvriendelijke mode zonder in te leveren op stijl of comfort',
        'home.hero.title6': 'Kleuren van de Zon',
        'home.hero.desc6':
            'Laat je inspireren door zonnige tinten en speelse prints',
        'home.hero.title7': 'Voor Elke Gelegenheid',
        'home.hero.desc7':
            'Van stranddagen tot avondfeestjes — outfits voor elk moment',
        'home.hero.title8': 'Express Your Style',
        'home.hero.desc8':
            'Creëer moeiteloos looks die jouw persoonlijkheid weerspiegelen',
        'home.hero.button': 'Bekijk Collectie',
        'home.philosophy.title': 'Onze Filosofie',
        'home.philosophy.text1':
            'LookOut Mode onderscheidt zich in de modewereld door het onafhankelijk selecteren van mooie, unieke merken met hoogwaardige materialen en seizoensgebonden kleurpaletten.',
        'home.philosophy.text2':
            'Onze collecties zijn zorgvuldig samengesteld en zijn altijd verrassend en inspirerend. Ons personeel staat bekend om persoonlijke stijl en het opbouwen van loyale relaties met klanten.',
        'home.features.curated.title': 'Met Liefde Samengesteld',
        'home.features.curated.desc':
            'Elk stuk in onze collectie is handmatig geselecteerd voor zijn kwaliteit, uniciteit en vermogen om vertrouwen te inspireren.',
        'home.features.seasonal.title': 'Seizoensexcellentie',
        'home.features.seasonal.desc':
            'Onze collecties veranderen met de seizoenen en bevatten kleuren en texturen die de schoonheid van elke tijd van het jaar weerspiegelen.',
        'home.features.personal.title': 'Persoonlijke Service',
        'home.features.personal.desc':
            'Wij geloven in het opbouwen van duurzame relaties met onze klanten door gepersonaliseerde styling en oprechte zorg.',
        'home.featured.title': 'Uitgelichte Collectie',
        'home.featured.subtitle':
            'Ontdek onze nieuwste Zomer 2025 collectie met levendige stukken van onze zorgvuldig geselecteerde designermerken.',
        'home.featured.brand1.desc': 'Elegante sjaals en verfijnde stukken',
        'home.featured.brand2.desc':
            'Hedendaagse mode met tijdloze uitstraling',
        'home.featured.brand3.desc':
            'Natuurlijke stoffen en comfortabele elegantie',
        'home.featured.button': 'Bekijk Volledige Collectie',

        // Current collection page
        'current.title': 'Zomer Collectie 2025',
        'current.subtitle':
            'Omarm de warmte en levendigheid van de zomer met onze zorgvuldig samengestelde collectie. Dit seizoen viert lichte, vloeiende stoffen, gedurfde kleuren en de vreugde van moeiteloze elegantie. Elk stuk weerspiegelt de essentie van de zomer—van zonovergoten middagen tot warme avondbijeenkomsten.',
        'current.brands.title': 'Uitgelichte Merken',
        'current.shawls.title': 'Sjaals & Omslagdoeken',
        'current.bags.title': 'Tassen & Accessoires',
        'current.jewelry.title': 'Sieraden',
        'current.shoes.title': 'Schoenen',
        'current.story.title': 'Het Verhaal Achter Zomer 2025',
        'current.story.text1':
            'Deze zomercollectie haalt inspiratie uit de Middellandse Zeekust, waar azuurblauwe wateren gouden zanden ontmoeten. Het kleurenpalet viert de warmte van het seizoen met koraalroze, oceaanblauw en zongebleekte witten.',
        'current.story.text2':
            'Texturen spelen een cruciale rol—denk aan vloeiende linnen die dansen in de zomerbries, lichtgewicht katoen dat ademt met je huid, en delicate zijde die het licht prachtig vangt.',
        'current.story.text3':
            'Elk stuk is niet alleen geselecteerd voor zijn schoonheid, maar ook voor zijn vermogen om je zelfverzekerd, comfortabel en moeiteloos chic te laten voelen gedurende het zomerseizoen.',

        // Archive page
        'archive.title': 'Archief Collecties',
        'archive.subtitle':
            'Verken onze eerdere collecties en ontdek de evolutie van onze gecureerde modereis. Elk seizoen vertelt een uniek verhaal door zorgvuldig geselecteerde stukken en seizoensinspiraties.',
        'archive.timeline.title': 'Onze Reis Door de Mode',
        'archive.spring2024.title': 'Lente Collectie 2024',
        'archive.spring2024.desc':
            'Frisse pastels en bloeiende bloemenprints definieerden onze lentecollectie, ter ere van vernieuwing en groei.',
        'archive.winter2023.title': 'Winter Collectie 2023',
        'archive.winter2023.desc':
            'Gezellige texturen en rijke aardtinten creëerden warmte en verfijning tijdens de koudere maanden.',
        'archive.autumn2023.title': 'Herfst Collectie 2023',
        'archive.autumn2023.desc':
            'Rijke bordeauxrood en gouden tinten vingen de essentie van de herfst met comfortabele elegantie.',
        'archive.summer2023.title': 'Zomer Collectie 2023',
        'archive.summer2023.desc':
            'Levendige kleuren en vloeiende stoffen vierden de vreugde en vrijheid van de zomer.',
        'archive.spring2023.title': 'Lente Collectie 2023',
        'archive.spring2023.desc':
            'Een viering van nieuwe begin met frisse kleuren en innovatieve silhouetten.',
        'archive.winter2022.title': 'Winter Collectie 2022',
        'archive.winter2022.desc':
            'Verfijnde lagen en luxueuze materialen definieerden onze wintergarderobe.',

        // Contact page
        'contact.title': 'Contact',
        'contact.subtitle':
            'Bezoek onze boetiek in het hart van Bussum of neem contact met ons op. Wij helpen je graag bij het vinden van je perfecte stijl en horen graag van je.',
        'contact.visit.title': 'Bezoek Onze Boetiek',
        'contact.address': 'Adres',
        'contact.phone': 'Telefoon',
        'contact.email': 'E-mail',
        'contact.hours': 'Openingstijden',
        'contact.hours.schedule':
            'Dinsdag, Woensdag, Vrijdag: 10:30–18:00\nZaterdag: 10:30–17:00',
        'contact.hours.closed': 'Gesloten: Maandag, Donderdag, Zondag',
        'contact.appointment.title': 'Persoonlijke Afspraken',
        'contact.appointment.desc':
            'Wij openen graag voor je op afspraak. Neem contact met ons op via e-mail of telefoon om een privé winkelervaring op maat voor jou in te plannen.',
        'contact.appointment.call': 'Bel Ons',
        'contact.appointment.email': 'E-mail Ons',
        'contact.form.title': 'Stuur Ons een Bericht',
        'contact.form.name': 'Naam',
        'contact.form.email': 'E-mail',
        'contact.form.subject': 'Onderwerp',
        'contact.form.message': 'Bericht',
        'contact.form.placeholder': 'Vertel ons hoe we je kunnen helpen...',
        'contact.form.send': 'Verstuur Bericht',
        'contact.map.title': 'Vind Ons in Bussum',
        'contact.map.interactive': 'Interactieve Kaart',

        // Footer
        'footer.about':
            'Boetiek modewinkel in Bussum, Nederland. Wij cureren authentieke trends en designermerken voor vrouwen die kwaliteit en uniciteit waarderen.',
        'footer.contact': 'Contact',
        'footer.hours': 'Openingstijden',
        'footer.hours.schedule':
            'Di, Wo, Vr: 10:30–18:00\nZaterdag: 10:30–17:00',
        'footer.hours.closed': 'Gesloten: Ma, Do, Zo',
        'footer.newsletter': 'Nieuwsbrief',
        'footer.newsletter.desc':
            'Blijf op de hoogte van onze nieuwste collecties en evenementen.',
        'footer.newsletter.placeholder': 'Voer je e-mail in',
        'footer.newsletter.subscribe': 'Abonneren',
        'footer.copyright':
            '© 2025 LookOut Mode. Alle rechten voorbehouden. Gemaakt met ❤️ in Bussum.',

        // Categories
        'category.shawls': 'Sjaals & Omslagdoeken',
        'category.bags': 'Tassen & Accessoires',
        'category.jewelry': 'Sieraden',
        'category.shoes': 'Schoenen',

        // Collection highlights
        'highlight.floral': 'Bloemenprints',
        'highlight.pastels': 'Pastelkleuren',
        'highlight.light': 'Lichte stoffen',
        'highlight.romantic': 'Romantische silhouetten',
        'highlight.warm': 'Warme texturen',
        'highlight.earth': 'Aardtinten',
        'highlight.layering': 'Laagstukken',
        'highlight.luxury': 'Luxe breisels',
        'highlight.burgundy': 'Bordeaux & goud',
        'highlight.comfortable': 'Comfortabele pasvorm',
        'highlight.transitional': 'Overgangsstukken',
        'highlight.natural': 'Natuurlijke stoffen',
        'highlight.vibrant': 'Levendige kleuren',
        'highlight.flowing': 'Vloeiende stoffen',
        'highlight.beach': 'Strandklaar',
        'highlight.effortless': 'Moeiteloze stijl',
        'highlight.fresh': 'Frisse kleuren',
        'highlight.silhouettes': 'Nieuwe silhouetten',
        'highlight.innovative': 'Innovatieve ontwerpen',
        'highlight.awakening': 'Lente ontwaken',
        'highlight.sophisticated': 'Verfijnde lagen',
        'highlight.materials': 'Luxe materialen',
        'highlight.wardrobe': 'Wintergarderobe',
        'highlight.timeless': 'Tijdloze elegantie',
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.current': 'Current',
        'nav.archive': 'Archive Collections',
        'nav.contact': 'Contact',

        // Home page
        'home.hero.title1': 'Summer Collection 2025',
        'home.hero.desc1':
            'Discover our carefully curated collection of vibrant summer pieces',
        'home.hero.title2': 'Authentic Trends',
        'home.hero.desc2':
            'Unique designer brands with quality materials and seasonal colors',
        'home.hero.title3': 'Curated Fashion',
        'home.hero.desc3':
            'Surprising and inspiring collections from independent designers',
        'home.hero.title4': 'Summer Elegance',
        'home.hero.desc4':
            'Enrich your wardrobe with stylish pieces for warm days',
        'home.hero.title5': 'Sustainable Choices',
        'home.hero.desc5':
            'Eco-friendly fashion without compromising on style or comfort',
        'home.hero.title6': 'Colors of the Sun',
        'home.hero.desc6': 'Be inspired by sunny tones and playful prints',
        'home.hero.title7': 'For Every Occasion',
        'home.hero.desc7':
            'From beach days to evening parties — outfits for every moment',
        'home.hero.title8': 'Express Your Style',
        'home.hero.desc8':
            'Effortlessly create looks that reflect your personality',
        'home.hero.button': 'Explore Collection',
        'home.philosophy.title': 'Our Philosophy',
        'home.philosophy.text1':
            'LookOut Mode distinguishes itself in the fashion world by independently selecting beautiful, unique brands with high-quality materials and seasonal color palettes.',
        'home.philosophy.text2':
            'Our collections are carefully curated and are always surprising and inspiring. Our staff is known for personal style and building loyal relationships with customers.',
        'home.features.curated.title': 'Curated with Love',
        'home.features.curated.desc':
            'Every piece in our collection is hand-selected for its quality, uniqueness, and ability to inspire confidence.',
        'home.features.seasonal.title': 'Seasonal Excellence',
        'home.features.seasonal.desc':
            'Our collections change with the seasons, featuring colors and textures that reflect the beauty of each time of year.',
        'home.features.personal.title': 'Personal Service',
        'home.features.personal.desc':
            'We believe in building lasting relationships with our customers through personalized styling and genuine care.',
        'home.featured.title': 'Featured Collection',
        'home.featured.subtitle':
            'Discover our latest Summer 2025 collection featuring vibrant pieces from our carefully selected designer brands.',
        'home.featured.brand1.desc': 'Elegant shawls and sophisticated pieces',
        'home.featured.brand2.desc':
            'Contemporary fashion with timeless appeal',
        'home.featured.brand3.desc': 'Natural fabrics and comfortable elegance',
        'home.featured.button': 'View Full Collection',

        // Current collection page
        'current.title': 'Summer Collection 2025',
        'current.subtitle':
            'Embrace the warmth and vibrancy of summer with our carefully curated collection. This season celebrates light, flowing fabrics, bold colors, and the joy of effortless elegance. Each piece reflects the essence of summer—from sun-drenched afternoons to warm evening gatherings.',
        'current.brands.title': 'Featured Brands',
        'current.shawls.title': 'Shawls & Wraps',
        'current.bags.title': 'Bags & Accessories',
        'current.jewelry.title': 'Jewelry',
        'current.shoes.title': 'Shoes',
        'current.story.title': 'The Story Behind Summer 2025',
        'current.story.text1':
            "This summer collection draws inspiration from the Mediterranean coast, where azure waters meet golden sands. The color palette celebrates the season's warmth with coral pinks, ocean blues, and sun-bleached whites.",
        'current.story.text2':
            'Textures play a crucial role—think flowing linens that dance in the summer breeze, lightweight cottons that breathe with your skin, and delicate silks that catch the light beautifully.',
        'current.story.text3':
            'Each piece has been selected not just for its beauty, but for its ability to make you feel confident, comfortable, and effortlessly chic throughout the summer season.',

        // Archive page
        'archive.title': 'Archive Collections',
        'archive.subtitle':
            'Explore our past collections and discover the evolution of our curated fashion journey. Each season tells a unique story through carefully selected pieces and seasonal inspirations.',
        'archive.timeline.title': 'Our Journey Through Fashion',
        'archive.spring2024.title': 'Spring Collection 2024',
        'archive.spring2024.desc':
            'Fresh pastels and blooming florals defined our spring collection, celebrating renewal and growth.',
        'archive.winter2023.title': 'Winter Collection 2023',
        'archive.winter2023.desc':
            'Cozy textures and rich earth tones created warmth and sophistication during the colder months.',
        'archive.autumn2023.title': 'Autumn Collection 2023',
        'archive.autumn2023.desc':
            'Rich burgundies and golden hues captured the essence of fall with comfortable elegance.',
        'archive.summer2023.title': 'Summer Collection 2023',
        'archive.summer2023.desc':
            'Vibrant colors and flowing fabrics celebrated the joy and freedom of summer.',
        'archive.spring2023.title': 'Spring Collection 2023',
        'archive.spring2023.desc':
            'A celebration of new beginnings with fresh colors and innovative silhouettes.',
        'archive.winter2022.title': 'Winter Collection 2022',
        'archive.winter2022.desc':
            'Sophisticated layering and luxurious materials defined our winter wardrobe.',

        // Contact page
        'contact.title': 'Contact Us',
        'contact.subtitle':
            "Visit our boutique in the heart of Bussum or get in touch with us. We're here to help you find your perfect style and would love to hear from you.",
        'contact.visit.title': 'Visit Our Boutique',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.hours': 'Opening Hours',
        'contact.hours.schedule':
            'Tuesday, Wednesday, Friday: 10:30–18:00\nSaturday: 10:30–17:00',
        'contact.hours.closed': 'Closed: Monday, Thursday, Sunday',
        'contact.appointment.title': 'Personal Appointments',
        'contact.appointment.desc':
            'We will gladly open for you by appointment. Contact us via email or phone to schedule a private shopping experience tailored just for you.',
        'contact.appointment.call': 'Call Us',
        'contact.appointment.email': 'Email Us',
        'contact.form.title': 'Send Us a Message',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.placeholder': 'Tell us how we can help you...',
        'contact.form.send': 'Send Message',
        'contact.map.title': 'Find Us in Bussum',
        'contact.map.interactive': 'Interactive Map',

        // Footer
        'footer.about':
            'Boutique fashion store in Bussum, Netherlands. We curate authentic trends and designer brands for women who appreciate quality and uniqueness.',
        'footer.contact': 'Contact',
        'footer.hours': 'Opening Hours',
        'footer.hours.schedule':
            'Tue, Wed, Fri: 10:30–18:00\nSaturday: 10:30–17:00',
        'footer.hours.closed': 'Closed: Mon, Thu, Sun',
        'footer.newsletter': 'Newsletter',
        'footer.newsletter.desc':
            'Stay updated with our latest collections and events.',
        'footer.newsletter.placeholder': 'Enter your email',
        'footer.newsletter.subscribe': 'Subscribe',
        'footer.copyright':
            '© 2025 LookOut Mode. All rights reserved. Made with ❤️ in Bussum.',

        // Categories
        'category.shawls': 'Shawls & Wraps',
        'category.bags': 'Bags & Accessories',
        'category.jewelry': 'Jewelry',
        'category.shoes': 'Shoes',

        // Collection highlights
        'highlight.floral': 'Floral prints',
        'highlight.pastels': 'Pastel colors',
        'highlight.light': 'Light fabrics',
        'highlight.romantic': 'Romantic silhouettes',
        'highlight.warm': 'Warm textures',
        'highlight.earth': 'Earth tones',
        'highlight.layering': 'Layering pieces',
        'highlight.luxury': 'Luxury knits',
        'highlight.burgundy': 'Burgundy & gold',
        'highlight.comfortable': 'Comfortable fits',
        'highlight.transitional': 'Transitional pieces',
        'highlight.natural': 'Natural fabrics',
        'highlight.vibrant': 'Vibrant colors',
        'highlight.flowing': 'Flowing fabrics',
        'highlight.beach': 'Beach-ready',
        'highlight.effortless': 'Effortless style',
        'highlight.fresh': 'Fresh colors',
        'highlight.silhouettes': 'New silhouettes',
        'highlight.innovative': 'Innovative designs',
        'highlight.awakening': 'Spring awakening',
        'highlight.sophisticated': 'Sophisticated layering',
        'highlight.materials': 'Luxury materials',
        'highlight.wardrobe': 'Winter wardrobe',
        'highlight.timeless': 'Timeless elegance',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('nl');

    useEffect(() => {
        // Check for saved language preference or browser language
        const savedLanguage = localStorage.getItem(
            'lookout-language'
        ) as Language;
        if (
            savedLanguage &&
            (savedLanguage === 'nl' || savedLanguage === 'en')
        ) {
            setLanguage(savedLanguage);
        } else {
            // Default to Dutch as mother language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('en')) {
                setLanguage('en');
            } else {
                setLanguage('nl');
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('lookout-language', language);
    }, [language]);

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

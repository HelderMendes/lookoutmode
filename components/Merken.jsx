import styles from './merken.module.css';

// Fisher-Yates shuffle
function shuffle(array) {
    let arr = array.slice();
    let currentIndex = arr.length,
        randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex],
            arr[currentIndex],
        ];
    }
    return arr;
}

// Example in React
const brands = [
    'Diega',
    'Hannoh',
    'In bed with you',
    'Maison de Soil',
    'Majestic',
    'MII',
    'Oska',
    'Raga',
    'Catherine André',
    'Injiri',
    'Transit',
    'Roberto Collina',
    'Zenggi',
    'Pomandère',
    'Vive la Difference',
    'Xirena',
];
<span className='marqueeText'>
    {brands.map((brand, idx) => (
        <span key={idx} className='brand'>
            {brand}
        </span>
    ))}
</span>;

const STRINGS = [
    {
        brands: [...shuffle(brands), ...shuffle(brands)],
        speed: 30,
    },
    {
        brands: [...shuffle(brands), ...shuffle(brands)],
        speed: 58,
    },
    {
        brands: [...shuffle(brands), ...shuffle(brands)],
        speed: 24,
    },
];

export default function Merken() {
    return (
        <div className={styles.marqueeContainer}>
            {STRINGS.map((item, idx) => (
                <div
                    key={idx}
                    className={styles.marquee}
                    style={{ animationDuration: `${item.speed}s` }}
                >
                    <span className={styles.marqueeText}>
                        {item.brands.map((brand, i) => (
                            <span key={i} className={styles.brand}>
                                {brand}
                            </span>
                        ))}
                    </span>
                </div>
            ))}
        </div>
    );
}

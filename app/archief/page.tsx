'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSeasonal } from '@/contexts/SeasonalContext';
import { useLanguage } from '@/contexts/LanguageContext';

const archiveCollections = [
  {
    id: 1,
    titleKey: 'archive.spring2024.title',
    season: 'Spring',
    year: '2024',
    descriptionKey: 'archive.spring2024.desc',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['highlight.floral', 'highlight.pastels', 'highlight.light', 'highlight.romantic']
  },
  {
    id: 2,
    titleKey: 'archive.winter2023.title',
    season: 'Winter',
    year: '2023',
    descriptionKey: 'archive.winter2023.desc',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['highlight.warm', 'highlight.earth', 'highlight.layering', 'highlight.luxury']
  },
  {
    id: 3,
    titleKey: 'archive.autumn2023.title',
    season: 'Autumn',
    year: '2023',
    descriptionKey: 'archive.autumn2023.desc',
    image: 'https://images.pexels.com/photos/1845331/pexels-photo-1845331.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['highlight.burgundy', 'highlight.comfortable', 'highlight.transitional', 'highlight.natural']
  },
  {
    id: 4,
    titleKey: 'archive.summer2023.title',
    season: 'Summer',
    year: '2023',
    descriptionKey: 'archive.summer2023.desc',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['highlight.vibrant', 'highlight.flowing', 'highlight.beach', 'highlight.effortless']
  },
  {
    id: 5,
    titleKey: 'archive.spring2023.title',
    season: 'Spring',
    year: '2023',
    descriptionKey: 'archive.spring2023.desc',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['highlight.fresh', 'highlight.silhouettes', 'highlight.innovative', 'highlight.awakening']
  },
  {
    id: 6,
    titleKey: 'archive.winter2022.title',
    season: 'Winter',
    year: '2022',
    descriptionKey: 'archive.winter2022.desc',
    image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['highlight.sophisticated', 'highlight.materials', 'highlight.wardrobe', 'highlight.timeless']
  }
];

export default function Archief() {
  const { currentSeason } = useSeasonal();
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className={`seasonal-bg-${currentSeason} py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('archive.title')}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t('archive.subtitle')}
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archiveCollections.map((collection) => (
              <Card key={collection.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                    <Image
                      src={collection.image}
                      alt={t(collection.titleKey)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {collection.season} {collection.year}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {t(collection.titleKey)}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {t(collection.descriptionKey)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {collection.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {t(highlight)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('archive.timeline.title')}
          </h2>
          <div className="space-y-8">
            {archiveCollections.map((collection, index) => (
              <div key={collection.id} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="text-center">
                    <div className="font-playfair text-sm font-semibold text-gray-900">
                      {collection.season}
                    </div>
                    <div className="text-xs text-gray-600">
                      {collection.year}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-2">
                    {t(collection.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(collection.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
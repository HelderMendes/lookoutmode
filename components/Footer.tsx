'use client';

import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSeasonal } from '@/contexts/SeasonalContext';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { currentSeason } = useSeasonal();
  const { t } = useLanguage();

  return (
    <footer className={`seasonal-bg-${currentSeason} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-gray-900">
              LookOut Mode
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('footer.about')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-gray-900">
              {t('footer.contact')}
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Huizerweg 45, 1401 GH Bussum</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>035 785 9521</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@lookoutmode.nl</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-gray-900">
              {t('footer.hours')}
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <div>
                  <div className="whitespace-pre-line">{t('footer.hours.schedule')}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {t('footer.hours.closed')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-gray-900">
              {t('footer.newsletter')}
            </h3>
            <p className="text-sm text-gray-600">
              {t('footer.newsletter.desc')}
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 text-sm"
              />
              <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
                {t('footer.newsletter.subscribe')}
              </Button>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
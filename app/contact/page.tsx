'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSeasonal } from '@/contexts/SeasonalContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
    const { currentSeason } = useSeasonal();
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className='pt-16'>
            {/* Hero Section */}
            <section className={`seasonal-bg-${currentSeason} py-20`}>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h1 className='font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
                        {t('contact.title')}
                    </h1>
                    <p className='text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto'>
                        {t('contact.subtitle')}
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className='py-20 bg-white/0'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        {/* Contact Details */}
                        <div className='space-y-8'>
                            <div>
                                <h2 className='font-playfair text-3xl font-bold text-gray-900 mb-8'>
                                    {t('contact.visit.title')}
                                </h2>
                                <div className='space-y-6'>
                                    <div className='flex items-start space-x-4'>
                                        <MapPin className='w-6 h-6 text-gray-600 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-gray-900 mb-1'>
                                                {t('contact.address')}
                                            </h3>
                                            <p className='text-gray-600'>
                                                Huizerweg 45
                                                <br />
                                                1401 GH Bussum
                                                <br />
                                                Netherlands
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-start space-x-4'>
                                        <Phone className='w-6 h-6 text-gray-600 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-gray-900 mb-1'>
                                                {t('contact.phone')}
                                            </h3>
                                            <p className='text-gray-600'>
                                                035 785 9521
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-start space-x-4'>
                                        <Mail className='w-6 h-6 text-gray-600 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-gray-900 mb-1'>
                                                {t('contact.email')}
                                            </h3>
                                            <p className='text-gray-600'>
                                                info@lookoutmode.nl
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-start space-x-4'>
                                        <Clock className='w-6 h-6 text-gray-600 mt-1' />
                                        <div>
                                            <h3 className='font-semibold text-gray-900 mb-1'>
                                                {t('contact.hours')}
                                            </h3>
                                            <div className='text-gray-600 space-y-1'>
                                                <p className='whitespace-pre-line'>
                                                    {t(
                                                        'contact.hours.schedule'
                                                    )}
                                                </p>
                                                <p className='text-sm text-gray-500'>
                                                    {t('contact.hours.closed')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Appointment Card */}
                            <Card className='bg-gray-50'>
                                <CardHeader>
                                    <CardTitle className='flex items-center space-x-2'>
                                        <MessageCircle className='w-5 h-5' />
                                        <span>
                                            {t('contact.appointment.title')}
                                        </span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-gray-600 mb-4'>
                                        {t('contact.appointment.desc')}
                                    </p>
                                    <div className='flex flex-col sm:flex-row gap-3'>
                                        <Button
                                            variant='outline'
                                            className='flex-1'
                                        >
                                            <Phone className='w-4 h-4 mr-2' />
                                            {t('contact.appointment.call')}
                                        </Button>
                                        <Button
                                            variant='outline'
                                            className='flex-1'
                                        >
                                            <Mail className='w-4 h-4 mr-2' />
                                            {t('contact.appointment.email')}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className='font-playfair text-3xl font-bold text-gray-900 mb-8'>
                                {t('contact.form.title')}
                            </h2>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div>
                                        <label
                                            htmlFor='name'
                                            className='block text-sm font-medium text-gray-700 mb-2'
                                        >
                                            {t('contact.form.name')} *
                                        </label>
                                        <Input
                                            id='name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className='w-full'
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='email'
                                            className='block text-sm font-medium text-gray-700 mb-2'
                                        >
                                            {t('contact.form.email')} *
                                        </label>
                                        <Input
                                            id='email'
                                            name='email'
                                            type='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className='w-full'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor='subject'
                                        className='block text-sm font-medium text-gray-700 mb-2'
                                    >
                                        {t('contact.form.subject')}
                                    </label>
                                    <Input
                                        id='subject'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className='w-full'
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='message'
                                        className='block text-sm font-medium text-gray-700 mb-2'
                                    >
                                        {t('contact.form.message')} *
                                    </label>
                                    <Textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        required
                                        className='w-full'
                                        placeholder={t(
                                            'contact.form.placeholder'
                                        )}
                                    />
                                </div>

                                <Button
                                    type='submit'
                                    size='lg'
                                    className='w-full bg-gray-900 hover:bg-gray-800'
                                >
                                    <Send className='w-4 h-4 mr-2' />
                                    {t('contact.form.send')}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className='py-20 bg-gray-50/0'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='font-playfair text-3xl font-bold text-gray-900 mb-8 text-center'>
                        {t('contact.map.title')}
                    </h2>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.253060040717!2d5.1727086!3d52.275107600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6099447132047%3A0xcafffe4296d13eb1!2slook%20Out%20Mode!5e0!3m2!1sen!2snl!4v1750744124491!5m2!1sen!2snl'
                        width='100%'
                        height='450'
                        // style='border:0;'
                        // allowFullScreen='true'
                        loading='lazy'
                        // referrerpolicy='no-referrer-when-downgrade'
                    ></iframe>
                    {/* <GoogleMap />
                    <div className='rounded-lg overflow-hidden shadow-lg'>
                        <div className='w-full h-96 bg-gray-300 flex items-center justify-center'>
                            <div className='text-center'>
                                <MapPin className='w-12 h-12 text-gray-600 mx-auto mb-4' />
                                <p className='text-gray-600 font-medium'>
                                    {t('contact.map.interactive')}
                                </p>
                                <p className='text-sm text-gray-500'>
                                    Huizerweg 45, 1401 GH Bussum
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

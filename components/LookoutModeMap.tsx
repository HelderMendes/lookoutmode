import React from 'react';

const LookoutModeMap: React.FC = () => (
    <div style={{ width: '100%', margin: '0 auto' }}>
        <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.252880796386!2d5.170133677740884!3d52.27511085433032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6099447132047%3A0xcafffe4296d13eb1!2slook%20Out%20Mode!5e0!3m2!1sen!2snl!4v1751701612849!5m2!1sen!2snl'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Look Out Mode Map'
        ></iframe>
    </div>
);

export default LookoutModeMap;

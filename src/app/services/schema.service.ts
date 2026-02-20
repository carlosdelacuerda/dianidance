// src/app/services/schema.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SchemaService {
  getSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'DanceSchool',
      name: 'Diani Dance',
      description:
        'Fun and unique things to do in Diani Beach with professional Latin and African dance classes. Perfect for tourists, couples, and groups looking for an unforgettable experience in Kenya.',
      url: 'https://dianidance.com',
      telephone: '+254748191194',
      email: 'hi@dianidance.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Diani Beach',
        addressRegion: 'Kwale County',
        addressCountry: 'KE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -4.3369,
        longitude: 39.5833,
      },
      areaServed: {
        '@type': 'Place',
        name: 'Diani Beach',
      },
    };
  }

  getFaqSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the best things to do in Diani Beach?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diani Beach offers relaxing beach time, sunset experiences, cultural activities and unique dance classes. Many visitors look for interactive and social experiences beyond the beach, such as Latin and African dance sessions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there unique activities in Diani besides the beach?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Beyond relaxing on the sand, visitors can enjoy cultural experiences, evening social events and dance classes that combine fun, movement and local atmosphere.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Diani Beach good for couples?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Diani Beach is ideal for couples looking for romantic sunsets, private experiences and fun activities together such as partner dance classes.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can I do in Diani at night?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In the evening, visitors can enjoy social events, beach dinners, and dance experiences that create a lively and memorable night in Diani.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are fun group activities in Diani Beach?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Groups can enjoy beach games, social gatherings and interactive activities like dance sessions that are perfect for friends traveling together.',
          },
        },
      ],
    };
  }
}

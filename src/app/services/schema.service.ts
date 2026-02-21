// src/app/services/schema.service.ts
import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SchemaService {
  private document = inject(DOCUMENT);

  getWebsiteSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Diani Dance',
      url: 'https://dianidance.com',
      inLanguage: 'en',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://dianidance.com/?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    };
  }

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

  getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  getFaqPageSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  getServiceSchema(config: {
    name: string;
    description: string;
    url: string;
    areaServed?: string;
    offers?: Array<{
      name: string;
      description?: string;
      price: number;
      priceCurrency: string;
      url?: string;
    }>;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Dance experience for tourists in Diani Beach',
      name: config.name,
      description: config.description,
      provider: {
        '@type': 'DanceSchool',
        name: 'Diani Dance',
        url: 'https://dianidance.com',
      },
      areaServed: {
        '@type': 'Place',
        name: config.areaServed ?? 'Diani Beach',
      },
      url: config.url,
      offers:
        config.offers?.map((offer) => ({
          '@type': 'Offer',
          name: offer.name,
          description: offer.description,
          price: offer.price,
          priceCurrency: offer.priceCurrency,
          availability: 'https://schema.org/InStock',
          url: offer.url ?? config.url,
        })) ?? [],
    };
  }

  getItemListSchema(config: {
    name: string;
    url: string;
    items: Array<{ name: string; url: string; description?: string }>;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: config.name,
      url: config.url,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: config.items.length,
      itemListElement: config.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Thing',
          name: item.name,
          url: item.url,
          description: item.description,
        },
      })),
    };
  }

  getHowToSchema(config: {
    name: string;
    description: string;
    totalTime?: string;
    supply?: string[];
    tool?: string[];
    steps: Array<{ name: string; text: string; url?: string }>;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: config.name,
      description: config.description,
      totalTime: config.totalTime,
      supply: config.supply?.map((item) => ({ '@type': 'HowToSupply', name: item })) ?? [],
      tool: config.tool?.map((item) => ({ '@type': 'HowToTool', name: item })) ?? [],
      step: config.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
        url: step.url,
      })),
    };
  }

  getSpeakableWebPageSchema(config: { url: string; name: string; cssSelectors: string[] }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: config.name,
      url: config.url,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: config.cssSelectors,
      },
    };
  }

  getQAPageSchema(config: { question: string; answer: string; url?: string }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'QAPage',
      mainEntity: {
        '@type': 'Question',
        name: config.question,
        text: config.question,
        answerCount: 1,
        acceptedAnswer: {
          '@type': 'Answer',
          text: config.answer,
          url: config.url,
        },
      },
    };
  }

  upsertJsonLd(id: string, payload: Record<string, unknown>) {
    let script: HTMLScriptElement | null = this.document.querySelector(
      `script[type='application/ld+json'][data-dd-schema='${id}']`,
    );

    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dd-schema', id);
      this.document.head.appendChild(script);
    }

    script.text = JSON.stringify(payload);
  }

  removeJsonLd(id: string) {
    const script: HTMLScriptElement | null = this.document.querySelector(
      `script[type='application/ld+json'][data-dd-schema='${id}']`,
    );

    script?.remove();
  }
}

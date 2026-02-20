// src/app/services/meta.service.ts
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class MetaService {
  private meta = inject(Meta);
  private title = inject(Title);

  updatePageMeta(config: {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
  }) {
    // Actualizar título
    this.title.setTitle(config.title);

    // Meta descripción
    this.meta.updateTag({ name: 'description', content: config.description });

    // Palabras clave
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
  }
}

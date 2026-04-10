import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { LoaderComponent } from './components/loader.component.';
import { ModalSent } from './components/modal-sent.component.ts/modal-sent.component';
import { FormsService } from './services/forms.service';
import { LoadingService } from './services/loading.service';
import { MetaService } from './services/meta.service';
import { SchemaService } from './services/schema.service';
import { AnalyticsService } from './services/analytics.service'; // Ajusta la ruta
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, LoaderComponent, ModalSent],
  templateUrl: `./app.html`,
})
export class AppComponent implements OnInit {
  // Cambiado de 'App' a 'AppComponent'
  protected readonly title = signal('Diani Dance');
  private readonly siteUrl = 'https://dianidance.com';

  formsService = inject(FormsService);
  loaderService = inject(LoadingService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private metaService = inject(MetaService);
  private schemaService = inject(SchemaService);
  private analytics = inject(AnalyticsService);

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.updateMetadataFromRoute());

    this.updateMetadataFromRoute();
  }

  private updateMetadataFromRoute(): void {
    let currentRoute = this.activatedRoute;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    const title = currentRoute.snapshot.title ?? 'Diani Dance | Activities in Diani Beach';
    const seoData = (currentRoute.snapshot.data['seo'] ?? {}) as {
      description?: string;
      keywords?: string;
      image?: string;
      breadcrumb?: string;
      faqs?: Array<{ question: string; answer: string }>;
      itemList?: {
        name: string;
        items: Array<{ name: string; url: string; description?: string }>;
      };
      howTo?: {
        name: string;
        description: string;
        totalTime?: string;
        supply?: string[];
        tool?: string[];
        steps: Array<{ name: string; text: string; url?: string }>;
      };
      speakable?: {
        name?: string;
        cssSelectors: string[];
      };
      qaPage?: {
        question: string;
        answer: string;
      };
      service?: {
        name: string;
        description: string;
        areaServed?: string;
        offers?: Array<{
          name: string;
          description?: string;
          price: number;
          priceCurrency: string;
          url?: string;
        }>;
      };
    };

    const canonicalUrl = this.buildCanonicalUrl(this.router.url);

    this.metaService.updatePageMeta({
      title,
      description:
        seoData.description ??
        'Discover unique tourist activities in Diani Beach with Diani Dance experiences for couples, friends and groups.',
      keywords: seoData.keywords,
      image: seoData.image ?? `${this.siteUrl}/android-chrome-512x512.png`,
      url: canonicalUrl,
    });

    this.metaService.updateHreflang(canonicalUrl);
    this.updateStructuredData(canonicalUrl, title, seoData);
  }

  private buildCanonicalUrl(path: string): string {
    const normalizedPath = path === '/' ? '' : path;
    const cleanPath = normalizedPath.split('?')[0].split('#')[0];
    return `${this.siteUrl}${cleanPath}`;
  }

  private updateStructuredData(
    canonicalUrl: string,
    title: string,
    seoData: {
      breadcrumb?: string;
      faqs?: Array<{ question: string; answer: string }>;
      itemList?: {
        name: string;
        items: Array<{ name: string; url: string; description?: string }>;
      };
      howTo?: {
        name: string;
        description: string;
        totalTime?: string;
        supply?: string[];
        tool?: string[];
        steps: Array<{ name: string; text: string; url?: string }>;
      };
      speakable?: {
        name?: string;
        cssSelectors: string[];
      };
      qaPage?: {
        question: string;
        answer: string;
      };
      service?: {
        name: string;
        description: string;
        areaServed?: string;
        offers?: Array<{
          name: string;
          description?: string;
          price: number;
          priceCurrency: string;
          url?: string;
        }>;
      };
    },
  ): void {
    this.schemaService.upsertJsonLd('business', this.schemaService.getSchema());
    this.schemaService.upsertJsonLd('website', this.schemaService.getWebsiteSchema());

    const isHome = canonicalUrl === `${this.siteUrl}`;
    const breadcrumbItems = [{ name: 'Home', url: `${this.siteUrl}/` }];

    if (!isHome) {
      breadcrumbItems.push({
        name: seoData.breadcrumb ?? this.extractPrimaryTitle(title),
        url: canonicalUrl,
      });
    }

    this.schemaService.upsertJsonLd(
      'breadcrumb',
      this.schemaService.getBreadcrumbSchema(breadcrumbItems),
    );

    if (seoData.faqs?.length) {
      this.schemaService.upsertJsonLd('faq', this.schemaService.getFaqPageSchema(seoData.faqs));
    } else {
      this.schemaService.removeJsonLd('faq');
    }

    if (seoData.itemList?.items?.length) {
      this.schemaService.upsertJsonLd(
        'itemlist',
        this.schemaService.getItemListSchema({
          name: seoData.itemList.name,
          url: canonicalUrl,
          items: seoData.itemList.items,
        }),
      );
    } else {
      this.schemaService.removeJsonLd('itemlist');
    }

    if (seoData.howTo?.steps?.length) {
      this.schemaService.upsertJsonLd(
        'howto',
        this.schemaService.getHowToSchema({
          name: seoData.howTo.name,
          description: seoData.howTo.description,
          totalTime: seoData.howTo.totalTime,
          supply: seoData.howTo.supply,
          tool: seoData.howTo.tool,
          steps: seoData.howTo.steps,
        }),
      );
    } else {
      this.schemaService.removeJsonLd('howto');
    }

    if (seoData.speakable?.cssSelectors?.length) {
      this.schemaService.upsertJsonLd(
        'speakable',
        this.schemaService.getSpeakableWebPageSchema({
          url: canonicalUrl,
          name: seoData.speakable.name ?? this.extractPrimaryTitle(title),
          cssSelectors: seoData.speakable.cssSelectors,
        }),
      );
    } else {
      this.schemaService.removeJsonLd('speakable');
    }

    if (seoData.qaPage) {
      this.schemaService.upsertJsonLd(
        'qapage',
        this.schemaService.getQAPageSchema({
          question: seoData.qaPage.question,
          answer: seoData.qaPage.answer,
          url: canonicalUrl,
        }),
      );
    } else {
      this.schemaService.removeJsonLd('qapage');
    }

    if (seoData.service) {
      this.schemaService.upsertJsonLd(
        'service',
        this.schemaService.getServiceSchema({
          name: seoData.service.name,
          description: seoData.service.description,
          url: canonicalUrl,
          areaServed: seoData.service.areaServed,
          offers: seoData.service.offers,
        }),
      );
    } else {
      this.schemaService.removeJsonLd('service');
    }
  }

  private extractPrimaryTitle(fullTitle: string): string {
    return fullTitle.split('|')[0]?.trim() || 'Diani Dance';
  }
}

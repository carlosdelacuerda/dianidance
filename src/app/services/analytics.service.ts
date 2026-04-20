import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private router = inject(Router);
  private readonly trackingId = 'G-MZY6WHTKZY'; // Pon tu ID real aquí

  constructor() {}

  private get isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  private get hasGtag(): boolean {
    return this.isBrowser && typeof (window as any).gtag === 'function';
  }

  private sendGtag(...args: unknown[]) {
    if (!this.hasGtag) {
      return;
    }

    (window as any).gtag(...args);
  }

  /**
   * Escucha los cambios de ruta y los envía a Google Analytics
   */
  trackPageViews() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.sendGtag('config', this.trackingId, {
          page_path: event.urlAfterRedirects,
        });
      });
  }

  /**
   * Método extra para trackear eventos manuales (ej: clics en botones)
   */
  trackEvent(eventName: string, params: object) {
    this.sendGtag('event', eventName, params);
  }
}

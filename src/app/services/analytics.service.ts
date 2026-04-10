import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// Esto le dice a TypeScript que 'gtag' existe globalmente en el index.html
declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private router = inject(Router);
  private readonly trackingId = 'G-MZY6WHTKZY'; // Pon tu ID real aquí

  constructor() {}

  /**
   * Escucha los cambios de ruta y los envía a Google Analytics
   */
  trackPageViews() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        gtag('config', this.trackingId, {
          page_path: event.urlAfterRedirects,
        });
      });
  }

  /**
   * Método extra para trackear eventos manuales (ej: clics en botones)
   */
  trackEvent(eventName: string, params: object) {
    gtag('event', eventName, params);
  }
}

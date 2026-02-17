// loading.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  // Usamos un Signal para un rendimiento óptimo (Angular 16+)
  // Si usas una versión anterior, puedes usar BehaviorSubject
  private activeRequests = 0;
  isLoading = signal<boolean>(false);

  show() {
    this.activeRequests++;
    console.log('Requests activas (+):', this.activeRequests);
    this.isLoading.set(true);

    setTimeout(() => {
      if (this.activeRequests > 0) {
        console.warn('Failsafe: Forzando ocultación de loading');
        this.activeRequests = 0;
        this.isLoading.set(false);
      }
    }, 10000); // 10 segundos
  }

  hide() {
    // Evitamos números negativos
    this.activeRequests = Math.max(0, this.activeRequests - 1);
    console.log('Requests activas (-):', this.activeRequests);

    if (this.activeRequests === 0) {
      this.isLoading.set(false);
    }
  }
}

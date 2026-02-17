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
    this.isLoading.set(true);
  }

  hide() {
    this.activeRequests = Math.max(0, this.activeRequests - 1);
    if (this.activeRequests === 0) {
      this.isLoading.set(false);
    }
  }
}

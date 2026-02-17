// loading.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    // Tap nos permite ver qué pasa en tiempo real
    tap({
      next: () => console.log('Petición en curso...'),
      error: (err) => console.error('Error detectado en interceptor:', err),
    }),
    finalize(() => {
      console.log('Finalizando loading...');
      loadingService.hide();
    }),
  );
};

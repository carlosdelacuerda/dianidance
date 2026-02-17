// loading.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  // Activamos el loader
  loadingService.show();

  return next(req).pipe(
    // El finalize se ejecuta tanto si la petición sale bien como si hay error
    finalize(() => loadingService.hide()),
  );
};

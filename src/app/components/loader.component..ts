// loader.component.ts
import { Component, inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm"
    >
      <div class="relative flex flex-col items-center">
        <div
          class="h-16 w-16 animate-spin rounded-full border-4 border-brand-primary border-r-transparent border-bg-soft border-l-transparent"
        ></div>
        <!-- <div class="absolute inset-0 h-16 w-16 animate-pulse rounded-full bg-indigo-400/20"></div> -->
        <span class="mt-4 font-semibold text-white tracking-widest uppercase text-xs"
          >Loading...</span
        >
      </div>
    </div>
  `,
})
export class LoaderComponent {
  public loadingService = inject(LoadingService);
}

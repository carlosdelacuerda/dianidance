import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  // Signal
  public selectedPackageSignal = signal<string>('');

  // Exponemos solo lectura
  selectedPackage = this.selectedPackageSignal.asReadonly();

  // Método para cambiarlo
  setSelectedPackage(pack: string) {
    this.selectedPackageSignal.set(pack);
  }

  // Opcional: limpiar selección
  clear() {
    this.selectedPackageSignal.set('');
  }
}

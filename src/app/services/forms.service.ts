import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  modalSuccess = signal(false);

  private http = inject(HttpClient);
  // Cambia la URL por la ruta completa de tu servidor Node
  private apiUrl = '/api/contact';

  onSubmit(formValue: any): void {
    // Aquí enviamos el valor limpio (el JSON)
    this.http.post(this.apiUrl, formValue).subscribe({
      next: (res: any) => {
        this.modalSuccess.set(true);
        setTimeout(() => {
          this.modalSuccess.set(false);
        }, 2000);
      },
      error: (err) => {
        console.error('Detalle del error:', err);
        alert(err.error?.message || 'Error al conectar con el servidor');
      },
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  private http = inject(HttpClient);
  // Cambia la URL por la ruta completa de tu servidor Node
  private apiUrl = '/api/contact';

  onSubmit(formValue: any): void {
    // Aquí enviamos el valor limpio (el JSON)
    this.http.post(this.apiUrl, formValue).subscribe({
      next: (res: any) => {
        alert(res.message || 'Mensaje enviado con éxito');
      },
      error: (err) => {
        console.error('Detalle del error:', err);
        alert(err.error?.message || 'Error al conectar con el servidor');
      },
    });
  }
}

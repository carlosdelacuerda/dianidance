// exchange.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExchangeService {
  // Nota: Deberías usar una variable de entorno para tu API Key
  private apiUrl = 'https://v6.exchangerate-api.com/v6/31898c4fb301319800ae0e3b/latest/USD';

  constructor(private http: HttpClient) {}

  getRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

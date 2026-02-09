import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: `./app.html`,
})
export class AppComponent {
  // Cambiado de 'App' a 'AppComponent'
  protected readonly title = signal('Diani Dance');
}

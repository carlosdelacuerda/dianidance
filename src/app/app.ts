import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { LoaderComponent } from './components/loader.component.';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, LoaderComponent],
  templateUrl: `./app.html`,
})
export class AppComponent {
  // Cambiado de 'App' a 'AppComponent'
  protected readonly title = signal('Diani Dance');
}

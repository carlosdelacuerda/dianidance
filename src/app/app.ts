import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { LoaderComponent } from './components/loader.component.';
import { ModalSent } from './components/modal-sent.component.ts/modal-sent.component';
import { FormsService } from './services/forms.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, LoaderComponent, ModalSent],
  templateUrl: `./app.html`,
})
export class AppComponent {
  // Cambiado de 'App' a 'AppComponent'
  protected readonly title = signal('Diani Dance');

  formsService = inject(FormsService);
}

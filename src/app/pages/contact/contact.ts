import { Component } from '@angular/core';

@Component({
  selector: 'dd-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  sendForm() {
    alert('Formulario enviado');
  }
}

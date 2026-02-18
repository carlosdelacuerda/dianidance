import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
})
export class Contact implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  private formsService = inject(FormsService);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required]],
    });
  }

  sendForm(): void {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      console.log('Datos listos para enviar:', this.contactForm.value);
      this.formsService.onSubmit(this.contactForm.value);
      this.initForm();
    } else {
      console.warn('El formulario contiene errores.');
    }
  }
}

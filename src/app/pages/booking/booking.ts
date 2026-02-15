import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'dd-booking',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {
  private fb = inject(FormBuilder);
  public packageService = inject(PackageService);

  // SIGNALS
  formSubmitted = signal(false);

  hours = ['8am - 9am', '11am - 12pm', '4pm - 5pm', '6pm - 7pm'];

  bookingForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    classType: ['', Validators.required],
    pack: [this.packageService.selectedPackageSignal(), Validators.required],
    groupSize: [
      4,
      this.packageService.selectedPackageSignal() === 'group' ? Validators.required : [],
    ],
    fecha: ['', Validators.required],
    hora: ['', Validators.required],
  });

  ngOnInit(): void {
    console.log(this.packageService.selectedPackageSignal());
  }

  selectPackage() {
    const selectedValue = this.bookingForm.get('pack')?.value;
    console.log('Valor seleccionado:', selectedValue);

    const selectedPack = selectedValue ?? '';
    this.packageService.setSelectedPackage(selectedPack);
    this.bookingForm.get('pack')?.setValue(selectedPack);
  }

  onSubmit(): void {
    this.formSubmitted.set(true);

    if (this.bookingForm.valid) {
      console.log('Datos listos para enviar:', this.bookingForm.value);
    } else {
      console.warn('El formulario contiene errores.');
    }
  }
}

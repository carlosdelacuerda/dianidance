import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PackageService } from '../../services/package.service';
import { ExchangeService } from '../../services/exchange.service';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'dd-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {
  private fb = inject(FormBuilder);
  public packageService = inject(PackageService);
  private exchangeService = inject(ExchangeService);
  private formsService = inject(FormsService);

  private kesRate: number = 0;

  // SIGNALS
  formSubmitted = signal(false);
  dolarsPrice = signal(0);
  khsPrice = signal(0);

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
    this.exchangeService.getRates().subscribe({
      next: (data) => {
        this.kesRate = data.conversion_rates.KES;
      },
      error: (err) => console.error('Error cargando tasa de cambio', err),
    });
  }

  selectPackage() {
    const selectedValue = this.bookingForm.get('pack')?.value;
    console.log('Valor seleccionado:', selectedValue);

    const selectedPack = selectedValue ?? '';
    this.packageService.setSelectedPackage(selectedPack);
    this.bookingForm.get('pack')?.setValue(selectedPack);
    this.calculatePrice();
  }

  calculatePrice() {
    const selectedPack = this.bookingForm.get('pack')?.value;
    const groupSize = this.bookingForm.get('groupSize')?.value || 0;

    switch (selectedPack) {
      case '1':
        this.dolarsPrice.set(25);
        break;
      case 'group':
        const pricePerPerson = 15 * groupSize;
        this.dolarsPrice.set(pricePerPerson);
        break;
      case '4':
        this.dolarsPrice.set(90);
        break;
      case '8':
        this.dolarsPrice.set(160);
        break;
    }

    this.khsPrice.set(this.convertToKES(this.dolarsPrice()));
  }

  convertToKES(amountInUSD: number): number {
    if (this.kesRate === 0) return 0; // Por si la API aún no responde
    return Math.round(amountInUSD * this.kesRate);
  }

  onSubmit(): void {
    this.formSubmitted.set(true);

    if (this.bookingForm.valid) {
      console.log('Datos listos para enviar:', this.bookingForm.value);
      this.formsService.onSubmit(this.bookingForm.value);
    } else {
      console.warn('El formulario contiene errores.');
    }
  }
}

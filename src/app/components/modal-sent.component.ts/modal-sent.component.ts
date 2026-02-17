import { Component, inject, signal } from '@angular/core';
import { FormsService } from '../../services/forms.service';
@Component({
  selector: 'dd-modal-sent',
  imports: [],
  templateUrl: './modal-sent.component.html',
})
export class ModalSent {
  formsService = inject(FormsService);
  onClose() {
    this.formsService.modalSuccess.set(false);
  }
}

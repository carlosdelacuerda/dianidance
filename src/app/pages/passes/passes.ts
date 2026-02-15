import { Component, inject } from '@angular/core';
import { TopFooterComponent } from '../../components/top-footer/top-footer';
import { Router } from '@angular/router';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'dd-offers',
  imports: [TopFooterComponent],
  templateUrl: './passes.html',
  styleUrl: './passes.css',
})
export class Passes {
  router = inject(Router);
  packageService = inject(PackageService);

  selectPackage(type: string) {
    this.packageService.setSelectedPackage(type); // signal
    this.router.navigate(['/booking']);
  }
}

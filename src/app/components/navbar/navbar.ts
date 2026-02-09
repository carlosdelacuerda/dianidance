import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'dd-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = signal(false);

  navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about-us', label: 'ABOUT US' },
    { path: '/offers', label: 'CLASSES & OFFERS' },
    { path: '/contact', label: 'CONTACT' },
  ];

  toggleMenu() {
    this.isMenuOpen.update((val) => !val);
  }
}

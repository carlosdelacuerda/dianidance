import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dd-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear: number = new Date().getFullYear();

  socialLinks = [
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'YouTube', url: '#', icon: '▶️' },
  ];

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Classes & Offers', path: '/offers' },
    { label: 'Contact', path: '/contact' },
  ];

  serviceLinks = [
    { label: 'Private Classes', url: '#' },
    { label: 'Group Sessions', url: '#' },
    { label: 'Events', url: '#' },
    { label: 'Packages', url: '#' },
  ];
}

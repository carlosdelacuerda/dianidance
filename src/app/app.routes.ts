import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Diani Dance | Home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about-us',
    title: 'About Us | Diani Dance',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'offers', // Classes and Pricing
    title: 'Classes & Pricing | Diani Dance',
    loadComponent: () => import('./pages/offers/offers').then((m) => m.Offers),
  },
  {
    path: 'booking',
    title: 'Book a Class | Diani Dance',
    loadComponent: () => import('./pages/booking/booking').then((m) => m.Booking),
  },
  {
    path: 'contact',
    title: 'Contact Us | Diani Dance',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Diani Dance | Home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  // {
  //   path: 'about-us',
  //   title: 'About Us | Diani Dance',
  //   loadComponent: () => import('./pages/about/about').then((m) => m.About),
  // },
  {
    path: 'classes', // Classes and Pricing
    title: 'Classes & Events | Diani Dance',
    loadComponent: () => import('./pages/classes/classes').then((m) => m.Classes),
  },
  {
    path: 'packages',
    title: 'Packages | Diani Dance',
    loadComponent: () => import('./pages/passes/passes').then((m) => m.Passes),
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
    path: 'privacy',
    title: 'Privacy Policy | Diani Dance',
    loadComponent: () => import('./pages/privacy/privacy').then((m) => m.Privacy),
  },
  {
    path: 'terms',
    title: 'Terms & Conditions | Diani Dance',
    loadComponent: () => import('./pages/terms/terms').then((m) => m.Terms),
  },
  {
    path: 'cookies',
    title: 'Cookie Policy | Diani Dance',
    loadComponent: () => import('./pages/cookies/cookies').then((m) => m.Cookies),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/sign-up-page/sign-up-page.component').then(
        (m) => m.SignUpPageComponent
      ),
    title: 'Share your social accounts profiles with mipov.net',
    canActivate: [loginGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
    title: 'Login to mipov.net',
    canActivate: [loginGuard],
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./pages/error/error.component').then((m) => m.ErrorComponent),
    title: 'Error',
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy-page/privacy-policy-page.component').then(
        (m) => m.PrivacyPolicyPageComponent
      ),
    title: 'Privacy policy',
  },
  {
    path: 'help',
    loadComponent: () =>
      import('./pages/help-page/help-page.component').then(
        (m) => m.HelpPageComponent
      ),
    title: 'Help - mipov.net',
  },
  {
    path: 'email-verification',
    loadComponent: () =>
      import(
        './pages/email-verification-page/email-verification-page.component'
      ).then((m) => m.EmailVerificationPageComponent),
    title: 'Email verification - mipov.net',
    // canActivate: [authGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile-page/profile-page.component').then(
        (m) => m.ProfilePageComponent
      ),
    title: 'Profile',
    // canActivate: [authGuard],
  },
  {
    path: 'links',
    loadComponent: () =>
      import('./pages/links-page/links-page.component').then(
        (m) => m.LinksPageComponent
      ),
    title: 'Links',
    canActivate: [authGuard],
  },
  {
    path: ':userName',
    loadComponent: () =>
      import('./pages/public-page/public-page.component').then(
        (m) => m.PublicPageComponent
      ),
    title: 'Links',
  },
];

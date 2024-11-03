import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { accessTokenInterceptor } from './interceptors/access-token.interceptor';
import { refreshTokenInterceptor } from './interceptors/refresh-token.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { withCredentialInterceptor } from './interceptors/with-credential.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([
        withCredentialInterceptor,
        accessTokenInterceptor,
        refreshTokenInterceptor,
      ]),
      withFetch()
    ),
    provideRouter(routes),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
    provideAnimationsAsync(),
  ],
};

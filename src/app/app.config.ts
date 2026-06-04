import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {AuthInterceptorService, SERVICES} from './services';
import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import {AppUrlConfig} from './app.url.config';
import {LucideAngularModule, Mail, Moon, Sun, Github, Instagram, Linkedin, Globe} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(),
    provideAppInitializer(() => {
      const config = inject(AppUrlConfig);
      return config.load();
    }),
    provideRouter(
      routes,
      withInMemoryScrolling({scrollPositionRestoration: 'enabled'}),
    ),
    SERVICES,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    importProvidersFrom(
      LucideAngularModule.pick(
        {
          Sun,
          Moon,
          Linkedin,
          Github,
          Instagram,
          Mail,
          Globe,
        }
      )
    ),
  ]
};

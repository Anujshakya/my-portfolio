import { Injectable } from '@angular/core';
import {APP_CONSTANTS} from '../../shared';

type Theme = 'light' | 'dark';

const THEME_TRANSITION_MS = 550;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly CURRENT_THEME_KEY = APP_CONSTANTS.localStorageKey.currentTheme;
  private currentTheme: Theme = 'light';

  loadTheme() {
    document.documentElement.classList.add('no-transitions');

    const savedTheme = localStorage.getItem(this.CURRENT_THEME_KEY);

    if (savedTheme) {
      this.currentTheme = this.validateTheme(savedTheme);
    } else {
      this.currentTheme = this.getSystemTheme();
    }

    this.applyTheme(this.currentTheme, false);

    setTimeout(() => {
      document.documentElement.classList.remove('no-transitions');
    }, 50);
  }

  private validateTheme(theme: string): Theme {
    return theme === 'dark' ? 'dark' : 'light';
  }

  private getSystemTheme(): Theme {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  applyTheme(theme: Theme, animate = true) {
    const validatedTheme = this.validateTheme(theme);
    const html = document.documentElement;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateDom = () => {
      html.setAttribute('data-theme', validatedTheme);
      this.currentTheme = validatedTheme;

      if (validatedTheme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }

      localStorage.setItem(this.CURRENT_THEME_KEY, validatedTheme);
    };

    if (!animate || prefersReducedMotion || html.classList.contains('no-transitions')) {
      updateDom();
      return;
    }

    html.classList.add('theme-switching');
    updateDom();

    window.setTimeout(() => {
      html.classList.remove('theme-switching');
    }, THEME_TRANSITION_MS);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  listenToSystemThemeChanges(): void {
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(this.CURRENT_THEME_KEY)) {
          const newTheme: Theme = e.matches ? 'dark' : 'light';
          this.applyTheme(newTheme);
        }
      });
    }
  }
}

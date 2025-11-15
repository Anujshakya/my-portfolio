import { Injectable } from '@angular/core';
import {APP_CONSTANTS} from '../../shared';

type Theme = 'light' | 'dark';

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

    this.applyTheme(this.currentTheme);

    // Re-enable transitions after a brief delay
    setTimeout(() => {
      document.documentElement.classList.remove('no-transitions');
    }, 100);
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

  applyTheme(theme: Theme) {
    const validatedTheme = this.validateTheme(theme);

    document.documentElement.setAttribute('data-theme', validatedTheme);
    this.currentTheme = validatedTheme;

    if (this.currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem(this.CURRENT_THEME_KEY, validatedTheme);
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

import {Component, OnInit} from '@angular/core';
import {APP_CONSTANTS} from '../../constants';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-theme-toggler',
  imports: [
    NgClass
  ],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.css',
})
export class ThemeTogglerComponent implements OnInit {
  currentTheme: 'light' | 'dark' = 'light';

  CURRENT_THEME = APP_CONSTANTS.localStorageKey.currentTheme;

  ngOnInit() {
    const savedTheme = localStorage.getItem(this.CURRENT_THEME) as 'light' | 'dark';
    this.currentTheme = savedTheme || 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);

    if (this.currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem(this.CURRENT_THEME, this.currentTheme);
  }
}

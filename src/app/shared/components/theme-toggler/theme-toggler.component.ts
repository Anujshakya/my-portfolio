import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {ThemeService} from '../../../services/common/theme.service';

@Component({
  selector: 'app-theme-toggler',
  imports: [
    NgClass
  ],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.css',
})
export class ThemeTogglerComponent implements OnInit {
  constructor(
    private _themeService: ThemeService,
  ) {
  }

  ngOnInit() {
    this._themeService.loadTheme();
  }

  toggleTheme(): void {
    this._themeService.toggleTheme();
  }

  get currentTheme(): string {
    return this._themeService.getCurrentTheme();
  }
}

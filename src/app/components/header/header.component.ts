import { Component } from '@angular/core';
import {ThemeTogglerComponent} from '../../shared/components/theme-toggler/theme-toggler.component';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    ThemeTogglerComponent,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

}

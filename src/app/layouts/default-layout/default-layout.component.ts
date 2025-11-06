import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeTogglerComponent} from '../../shared/components/theme-toggler/theme-toggler.component';

@Component({
  selector: 'app-default-layout',
  imports: [
    RouterOutlet,
    ThemeTogglerComponent
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css',
})
export class DefaultLayoutComponent {
}

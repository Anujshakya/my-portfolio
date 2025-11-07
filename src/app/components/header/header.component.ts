import { Component } from '@angular/core';
import {ThemeTogglerComponent} from '../../shared/components/theme-toggler/theme-toggler.component';
import {RouterLink} from '@angular/router';
import {ProfileImageComponent} from '../../shared/components/profile-image/profile-image.component';

@Component({
  selector: 'app-header',
  imports: [
    ThemeTogglerComponent,
    RouterLink,
    ProfileImageComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

}

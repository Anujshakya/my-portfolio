import {Component} from '@angular/core';
import {ThemeTogglerComponent, ProfileImageComponent} from '../../shared';
import {RouterLink} from '@angular/router';

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

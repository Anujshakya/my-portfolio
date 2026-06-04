import {Component} from '@angular/core';
import {ThemeTogglerComponent, ProfileImageComponent} from '../../shared';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    ThemeTogglerComponent,
    RouterLink,
    RouterLinkActive,
    ProfileImageComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  protected readonly navLinkActiveClass =
    '!shadow-inner !bg-base-200 dark:!bg-base-100 active:!shadow-[inset_0_3px_6px_rgba(0,0,0,0.3)]';
}

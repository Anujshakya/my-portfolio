import {Component} from '@angular/core';
import {ProfileImageComponent, SpotifyCurrentPlayingComponent} from '../../../shared';
import {LucideAngularModule} from 'lucide-angular';
import {APP_CONSTANTS} from '../../../shared';

@Component({
  selector: 'app-intro',
  imports: [
    ProfileImageComponent,
    LucideAngularModule,
    SpotifyCurrentPlayingComponent
  ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
  SOCIAL_LINKS = APP_CONSTANTS.socialLinks;
}

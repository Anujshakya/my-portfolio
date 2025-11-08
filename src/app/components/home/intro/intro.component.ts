import {Component} from '@angular/core';
import {ProfileImageComponent} from '../../../shared/components/profile-image/profile-image.component';
import {LucideAngularModule} from 'lucide-angular';
import {APP_CONSTANTS} from '../../../shared';
import {
  SpotifyCurrentPlayingComponent
} from '../../../shared/components/spotify-current-playing/spotify-current-playing.component';

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

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfileImageComponent, SpotifyCurrentPlayingComponent} from '../../../shared';
import {LucideAngularModule} from 'lucide-angular';
import {APP_CONSTANTS} from '../../../shared';
import {Subscription} from 'rxjs';
import {AboutMeModel} from '../../../models';
import {AboutMeService} from '../../../services/about-me.service';

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
export class IntroComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  aboutMeData: AboutMeModel = {} as AboutMeModel;

  SOCIAL_LINKS = APP_CONSTANTS.socialLinks;

  constructor(
    private _aboutMeService: AboutMeService,
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  private loadData(): void {
    this.sub.add(
      this._aboutMeService.getAboutMe().subscribe(
        res => {
          this.aboutMeData = res;
        }
      )
    )
  }
}

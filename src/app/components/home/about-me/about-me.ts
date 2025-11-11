import {Component, OnDestroy, OnInit} from '@angular/core';
import {IMAGE_URLS, skillImageUrl} from '../../../shared';
import {ProfileImageComponent} from '../../../shared';
import {AboutMeService} from '../../../services/about-me.service';
import {Subscription} from 'rxjs';
import {AboutMeModel} from '../../../models';
import {LucideAngularModule} from 'lucide-angular';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [
    ProfileImageComponent,
    LucideAngularModule,
    NgOptimizedImage
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  aboutMeData: AboutMeModel = {} as AboutMeModel;

  IMAGE_URLS = IMAGE_URLS;

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

  protected readonly skillImageUrl = skillImageUrl;
}

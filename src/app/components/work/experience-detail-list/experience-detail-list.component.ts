import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ExperienceModel} from '../../../models';
import {ExperienceService} from '../../../services/experience.service';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {skillImageUrl} from '../../../shared';

@Component({
  selector: 'app-experience-detail-list',
  imports: [
    DatePipe,
    NgOptimizedImage
  ],
  templateUrl: './experience-detail-list.component.html',
  styleUrl: './experience-detail-list.component.css',
})
export class ExperienceDetailListComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  experiences: ExperienceModel[] = [];
  selectedId: number = 1;

  skillImageUrl = skillImageUrl;

  constructor(
    private _experienceService: ExperienceService,
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
      this._experienceService.getExperience().subscribe(
        res => {
          this.experiences = res;
        }
      )
    )
  }
}

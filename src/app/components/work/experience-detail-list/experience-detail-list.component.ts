import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ExperienceModel} from '../../../models';
import {ExperienceService} from '../../../services/experience.service';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {EmptyPageComponent, skillImageUrl} from '../../../shared';

@Component({
  selector: 'app-experience-detail-list',
  imports: [
    DatePipe,
    NgOptimizedImage,
    EmptyPageComponent
  ],
  templateUrl: './experience-detail-list.component.html',
  styleUrl: './experience-detail-list.component.css',
})
export class ExperienceDetailListComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  experiences: ExperienceModel[] = [];
  selectedId: number = 1;
  isLoading: boolean = false;

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
    this.isLoading = true;
    this.sub.add(
      this._experienceService.getExperience().subscribe(
        res => {
          this.experiences = res;
          this.isLoading = false;
        }
      )
    )
  }

  hasNoExperience(): boolean {
    return !this.experiences || this.experiences.length === 0;
  }
}

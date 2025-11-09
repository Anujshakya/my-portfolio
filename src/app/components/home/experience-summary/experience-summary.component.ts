import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ExperienceModel} from '../../../models';
import {ExperienceService} from '../../../services/experience.service';
import {DatePipe, DecimalPipe, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-experience-summary',
  imports: [
    DecimalPipe,
    NgOptimizedImage,
    DatePipe,
    RouterLink
  ],
  templateUrl: './experience-summary.component.html',
  styleUrl: './experience-summary.component.css',
})
export class ExperienceSummaryComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  experiences: ExperienceModel[] = [];

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

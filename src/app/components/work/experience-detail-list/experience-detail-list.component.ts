import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ExperienceModel} from '../../../models';
import {ExperienceService} from '../../../services/experience.service';

@Component({
  selector: 'app-experience-detail-list',
  imports: [],
  templateUrl: './experience-detail-list.component.html',
  styleUrl: './experience-detail-list.component.css',
})
export class ExperienceDetailListComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  experiences: ExperienceModel[] = [];

  constructor(
    private _experienceService: ExperienceService,
  ) {
  }

  ngOnInit() {
    this.loadData();
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

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProjectModel} from '../../../models';
import {ProjectService} from '../../../services/project.service';
import {ProjectListComponent} from '../../../shared/components/project-list/project-list.component';

@Component({
  selector: 'app-project-summary',
  imports: [
    ProjectListComponent
  ],
  templateUrl: './project-summary.component.html',
  styleUrl: './project-summary.component.css',
})
export class ProjectSummaryComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  projects: ProjectModel[] = [];

  constructor(
    private _projectService: ProjectService,
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
      this._projectService.getProjects().subscribe(
        res => {
          this.projects = res;
        }
      )
    )
  }
}

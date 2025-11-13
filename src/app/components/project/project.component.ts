import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmptyPageComponent, ProjectListComponent} from '../../shared';
import {Subscription} from 'rxjs';
import {ProjectModel} from '../../models';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-project',
  imports: [
    ProjectListComponent,
    EmptyPageComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  projects: ProjectModel[] = [];
  isLoading = false;

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
    this.isLoading = true;

    this.sub.add(
      this._projectService.getProjects().subscribe(
        res => {
          this.projects = res;
          this.isLoading = false;
        }
      )
    )
  }

  hasNoProjects() {
    return !this.projects || this.projects.length === 0;
  }
}

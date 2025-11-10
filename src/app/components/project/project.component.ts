import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectListComponent} from '../../shared/components/project-list/project-list.component';
import {Subscription} from 'rxjs';
import {ProjectModel} from '../../models';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-project',
  imports: [
    ProjectListComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit, OnDestroy {
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

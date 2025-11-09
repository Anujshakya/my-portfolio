import {Component, Input} from '@angular/core';
import {ProjectModel} from '../../../models';
import {ProjectListCardComponent} from './project-list-card/project-list-card.component';

@Component({
  selector: 'app-project-list',
  imports: [
    ProjectListCardComponent
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  @Input() projects: ProjectModel[] = [];
}

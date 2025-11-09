import {Component, Input} from '@angular/core';
import {ProjectModel} from '../../../../models';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {getProjectStatusBadgeColor, skillImageUrl} from '../../../utils';

@Component({
  selector: 'app-project-list-card',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './project-list-card.component.html',
  styleUrl: './project-list-card.component.css',
})
export class ProjectListCardComponent {
  @Input() project: ProjectModel = {} as ProjectModel;

  skillImageUrl = skillImageUrl;
  getProjectStatusBadgeColor = getProjectStatusBadgeColor;
}

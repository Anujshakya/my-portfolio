import { Component } from '@angular/core';
import {IMAGE_URLS, STYLE_CONSTANTS} from '../../shared';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {APP_ROUTE_PATHS} from '../../app-route-paths';

@Component({
  selector: 'app-not-found',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  protected readonly APP_ROUTE_PATHS = APP_ROUTE_PATHS;
  NOT_FOUND_IMAGE_LIGHT = IMAGE_URLS.notFoundPageLight;
  NOT_FOUND_IMAGE_DARK = IMAGE_URLS.notFoundPageDark;
  STYLE_CONSTANTS = STYLE_CONSTANTS;
}

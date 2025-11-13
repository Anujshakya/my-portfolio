import { Component } from '@angular/core';
import {IMAGE_URLS} from '../../constants';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-empty-page',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.css',
})
export class EmptyPageComponent {
  EMPTY_PAGE_IMAGE_LIGHT = IMAGE_URLS.emptyPageLight;
  EMPTY_PAGE_IMAGE_DARK = IMAGE_URLS.emptyPageDark;
}

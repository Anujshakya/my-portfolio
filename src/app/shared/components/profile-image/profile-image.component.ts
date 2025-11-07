import {Component, Input} from '@angular/core';
import {IMAGE_URLS} from '../../constants';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-profile-image',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './profile-image.component.html',
  styleUrl: './profile-image.component.css',
})
export class ProfileImageComponent {
  @Input() imageUrl: string = IMAGE_URLS.profile;
  @Input() size: string = 'w-16 h-16';
  @Input() backgroundColor: string = 'bg-gradient-to-br from-blue-400/80 to-cyan-400/80 dark:from-purple-600/80 dark:to-indigo-600/80';
  @Input() glassEffect: boolean = true;
  @Input() rounded: string = 'rounded-full';
  @Input() fallbackUrl: string = './assets/images/pp101.png';
  @Input() alt: string = 'Profile image';

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.fallbackUrl;
  }

  get containerClasses(): string {
    return [
      'relative overflow-hidden transition-all duration-300 group',
      this.size,
      this.rounded,
      'hover:scale-105',
    ]
      .filter(Boolean)
      .join(' ');
  }

  get backgroundClasses(): string {
    return [
      'absolute inset-0 transition-transform duration-300 group-hover:scale-105',
      this.rounded,
      this.glassEffect ? 'backdrop-blur-xl shadow-lg' : '',
      this.backgroundColor,
    ]
      .filter(Boolean)
      .join(' ');
  }
}

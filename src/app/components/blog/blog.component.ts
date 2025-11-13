import { Component } from '@angular/core';
import {EmptyPageComponent} from '../../shared';

@Component({
  selector: 'app-blog',
  imports: [
    EmptyPageComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blogs: any[] = []
  isLoading: boolean = false;

  hasNoBlogs(): boolean {
    return !this.blogs || this.blogs.length === 0;
  }
}

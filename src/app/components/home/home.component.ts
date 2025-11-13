import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../services';
import {Subscription} from 'rxjs';
import {PostModel} from '../../models';
import {IntroComponent} from './intro/intro.component';
import {ExperienceSummaryComponent} from './experience-summary/experience-summary.component';
import {ProjectSummaryComponent} from './project-summary/project-summary.component';
import {AboutMe} from './about-me/about-me';

@Component({
  selector: 'app-home',
  imports: [
    IntroComponent,
    ExperienceSummaryComponent,
    ProjectSummaryComponent,
    AboutMe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  posts: PostModel[] = []

  constructor(
    private _productService: PostService,
  ) {
  }

  ngOnInit() {
    // this.loadData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadData() {
    this.sub.add(
      this._productService.getAll().subscribe((res: PostModel[]) => {
        this.posts = res.slice(0, 10);
      })
    )
  }
}

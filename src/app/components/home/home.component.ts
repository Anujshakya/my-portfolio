import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../services';
import {Subscription} from 'rxjs';
import {PostModel} from '../../models';
import {ProfileImageComponent} from '../../shared/components/profile-image/profile-image.component';

@Component({
  selector: 'app-home',
  imports: [
    ProfileImageComponent
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
    this.loadData();
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

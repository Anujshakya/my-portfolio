import { Injectable } from '@angular/core';
import {HttpService} from './common/http.service';
import {PostModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class PostService extends HttpService<PostModel, PostModel>{
  constructor() {
    super();
  }

  override getResourceUrl(): string {
    return "posts";
  }
}

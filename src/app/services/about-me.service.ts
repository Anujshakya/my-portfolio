import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AboutMeModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  constructor(
    private http: HttpClient
  ) {
  }

  getAboutMe(): Observable<AboutMeModel> {
    return this.http.get<AboutMeModel>('./assets/json/about-me.json');
  }
}

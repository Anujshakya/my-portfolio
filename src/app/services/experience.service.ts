import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExperienceModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getExperience(): Observable<ExperienceModel[]> {
    return this.http.get<ExperienceModel[]>('./assets/json/experience.json');
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>('./assets/json/projects.json');
  }
}

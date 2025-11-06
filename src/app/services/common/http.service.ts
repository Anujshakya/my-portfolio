import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AppUrlConfig} from '../../app.url.config';
import {Observable} from 'rxjs';

@Injectable()
export abstract class HttpService<REQ, RES> {
  httpClient = inject(HttpClient);
  config = inject(AppUrlConfig);
  protected headers: HttpHeaders | undefined;
  protected url = `${this.config.apiUrl}${this.getResourceUrl()}`;

  protected abstract getResourceUrl(): string;

  constructor() {
  }

  protected createUrlWithUuid(uuid: string): string {
    return `${this.url}/uuid/${uuid}`;
  }

  public getHttpParams(...params: any): HttpParams {
    const paramsObject: any = {};
    Object.assign(paramsObject, ...params);
    let httpParams: HttpParams = new HttpParams();
    if (paramsObject) {
      for (const prop in paramsObject) {
        if (paramsObject.hasOwnProperty(prop)) {
          const paramValue = paramsObject[prop];
          let valueOfTypeString = '';
          if (paramValue != null) {
            valueOfTypeString = paramValue.toString();
          }
          if (valueOfTypeString != null || valueOfTypeString !== '') {
            httpParams = httpParams.append(prop, valueOfTypeString);
          }
        }
      }
    }
    return httpParams;
  }

  public getByUuid(uuid: string): Observable<RES> {
    const url = this.createUrlWithUuid(uuid);
    return this.httpClient.get<RES>(url);
  }

  public getAllByUuid(uuid: string): Observable<RES[]> {
    const url = this.createUrlWithUuid(uuid);
    return this.httpClient.get<RES[]>(url);
  }

  public getAll(...options: any): Observable<RES[]> {
    const params: HttpParams = this.getHttpParams(...options);
    return this.httpClient.get<RES[]>(this.url, {params});
  }

  public post(body: REQ = {} as REQ): Observable<RES> {
    const options = {headers: this.headers};
    return this.httpClient.post<RES>(this.url, {...body}, options);
  }

  public put(uuid: string, body: REQ = {} as REQ): Observable<RES> {
    const options = {headers: this.headers};
    return this.httpClient.put<RES>(this.createUrlWithUuid(uuid), {...body}, options);
  }

  public patch(uuid: string, body: any = {}): Observable<RES> {
    const options = {headers: this.headers};
    return this.httpClient.put<RES>(this.createUrlWithUuid(uuid), {...body}, options);
  }

  public delete(uuid: string): Observable<void> {
    return this.httpClient.delete<void>(this.createUrlWithUuid(uuid));
  }
}

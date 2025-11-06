import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppUrlConfig {
  private configBaseUrl = 'configs';
  private configEnvUrl = 'configs/env.json';
  private config: any = {
    key: '',
    baseUrl: '',
    apiUrl: '',
  };

  private env: any = {
    key: '',
  };

  constructor(private http: HttpClient) {
  }

  public get baseUrl(): string {
    return this.config.baseUrl;
  }

  public get apiUrl(): string {
    return this.config.apiUrl;
  }

  public getEnv(): string {
    return this.env.key;
  }

  public load = () => {
    return new Promise((resolve, _) => {
      this.http.get(this.configEnvUrl).pipe(catchError((error: any): any => {
        resolve(true);
        return new Error(error.json().error || 'Server error');
      })).subscribe((envResponse) => {
        this.env = envResponse;

        let request: any;
        request = this.http.get<any>(`${this.configBaseUrl}/config.${this.getEnv()}.json`);
        if (request) {
          request.pipe(
            map((res: any) => res),
          ).subscribe((responseData: any) => {
            this.config = responseData;
            resolve(true);
          }, (err: any) => {
            console.error('Error reading ' + this.getEnv() + ' configuration file');
            resolve(err);
            return Error(err || 'Server error');
          });
        } else {
          console.error('Env config file "env.json" is not valid');
          resolve(true);
        }
      })
    })
  }

  // public load(): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     // Step 1: Load env.json
  //     this.http.get<string>(this.configEnvUrl).subscribe({
  //       next: (envResponse) => {
  //         // Step 2: Store the environment key
  //         this.env = envResponse;
  //
  //         console.log('Environment key loaded:', this.env.key);
  //
  //         if (!this.env.key) {
  //           console.error('Environment key is empty in env.json');
  //           reject(new Error('Environment key is empty'));
  //           return;
  //         }
  //
  //         // Step 3: Load config.{key}.json
  //         this.http.get<any>(`${this.configBaseUrl}/config.${this.env.key}.json`).subscribe({
  //           next: (configResponse) => {
  //             // Step 4: Replace config values
  //             this.config = {
  //               ...this.config,
  //               ...configResponse
  //             };
  //
  //             console.log('Configuration loaded:', this.config);
  //             resolve(true);
  //           },
  //           error: (err) => {
  //             console.error(`Error loading config.${this.env.key}.json:`, err);
  //             reject(err);
  //           }
  //         });
  //       },
  //       error: (err) => {
  //         console.error('Error loading env.json:', err);
  //         reject(err);
  //       }
  //     });
  //   });
  // }
}

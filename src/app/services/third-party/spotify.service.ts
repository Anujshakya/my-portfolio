import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map, Observable, of, switchMap} from 'rxjs';
import {SPOTIFY_CONSTANTS} from '../../shared/spotify-constants';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private readonly tokenEndpoint = 'https://accounts.spotify.com/api/token';
  private readonly nowPlayingEndpoint = 'https://api.spotify.com/v1/me/player/currently-playing';

  private clientId = SPOTIFY_CONSTANTS.clientID;
  private clientSecret = SPOTIFY_CONSTANTS.clientSecret;
  private refreshToken = SPOTIFY_CONSTANTS.refreshToken;

  constructor(private http: HttpClient) {
  }

  private getAccessToken(): Observable<string> {
    const basic = btoa(`${this.clientId}:${this.clientSecret}`);
    const headers = new HttpHeaders({
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', this.refreshToken);

    return this.http.post<any>(this.tokenEndpoint, body.toString(), { headers })
      .pipe(
        map(resp => resp.access_token),
        catchError(err => {
          console.error('Error obtaining access token', err);
          return of('');
        })
      );
  }

  getNowPlaying(): Observable<any> {
    return this.getAccessToken().pipe(
      map(token => token ? `Bearer ${token}` : ''),
      switchMap(authHeader => {
        if (!authHeader) { return of(null); }
        const headers = new HttpHeaders({ 'Authorization': authHeader });
        return this.http.get<any>(this.nowPlayingEndpoint, { headers });
      }),
      catchError(err => {
        console.error('Error fetching now playing', err);
        return of(null);
      })
    );
  }
}

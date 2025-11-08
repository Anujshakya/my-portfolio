import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {SpotifyService} from '../../../services';
import {IMAGE_URLS} from '../../constants';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-spotify-current-playing',
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './spotify-current-playing.component.html',
  styleUrl: './spotify-current-playing.component.css',
})
export class SpotifyCurrentPlayingComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  songTitle: string = '';
  artist: string = '';
  albumImageUrl: string = '';
  isPlaying: boolean = false;
  timePlayed: number = 0;
  timeTotal: number = 0;

  spotifyImageUrl: string = IMAGE_URLS.spotify;

  constructor(
    private _spotifyService: SpotifyService,
  ) {
  }

  ngOnInit() {
    this.sub = timer(0, 36000).subscribe(() => {
      this._spotifyService.getNowPlaying().subscribe(data => {
        if (data && data.item) {
          this.songTitle = data.item.name;
          this.artist = data.item.artists.map((a: { name: any; }) => a.name).join(', ');
          this.albumImageUrl = data.item.album.images[0].url;
          this.isPlaying = data.is_playing;
          this.timePlayed = data.progress_ms;
          this.timeTotal = data.item.duration_ms;
        } else {
          this.songTitle = 'Nothing playing';
          this.artist = '';
          this.albumImageUrl = '';
          this.isPlaying = false;
          this.timePlayed = 0;
          this.timeTotal = 0;
        }
      })
    })
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}

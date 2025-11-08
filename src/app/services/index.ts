import {AuthInterceptorService} from './common/auth-interceptor.service';
import {PostService} from './post.service';
import {SpotifyService} from './third-party/spotify.service';

export const SERVICES = [
  AuthInterceptorService,
  PostService,
  SpotifyService,
]

export * from './common/auth-interceptor.service';

export * from './third-party/spotify.service'

export * from './post.service';

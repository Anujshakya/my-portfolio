import {AuthInterceptorService} from './common/auth-interceptor.service';
import {PostService} from './post.service';

export const SERVICES = [
  AuthInterceptorService,
  PostService,
]

export * from './common/auth-interceptor.service';

export * from './post.service';

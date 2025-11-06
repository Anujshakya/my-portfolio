import {inject, Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, finalize, Observable, retry, throwError} from 'rxjs';
import {HTTP_STATUS} from '../../shared';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  private readonly SESSION_EXPIRED = 'Your session has expired. Please login.';
  private errorMsg = '';
  private errorTitle = '';

  private _router = inject(Router);

  constructor() {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      retry(1),
      catchError((err: HttpErrorResponse) => {
        this.handleHttpError(err);
        return throwError(null);
      }),
      finalize(() => {
      })
    );
  }

  private addAuthToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handleHttpError(err: HttpErrorResponse): void {
    if (err.status === HTTP_STATUS.UNAUTHORIZED) {
      this._router.navigate(['']);/*
      this._myInfoService.removeItem(this.INFO_KEY.defaultCustomer)
      this._myInfoService.removeItem(this.INFO_KEY.defaultToken)
      this._toasterService.info(this.SESSION_EXPIRED, 'Session Timeout');*/
    } else if (err.error.error === 'invalid_grant') {
      this.errorMsg = 'Incorrect Username or Password.';
    } else {
      this.errorMsg = err.error;
    }
    this.errorTitle = this.getErrorMsg(err.status);

    /*if (this.errorMsg) {
      this._toasterService.error(this.errorTitle, this.errorMsg);
    }

    this._spinnerService.hideSpinner();*/
  }

  private getErrorMsg(statusCode: HTTP_STATUS): string {
    switch (statusCode) {
      case HTTP_STATUS.BAD_REQUEST:
        return 'Error';
      case HTTP_STATUS.UNAUTHORIZED:
        return 'Unauthorized';
      case HTTP_STATUS.FORBIDDEN:
        return 'Forbidden';
      case HTTP_STATUS.NOT_FOUND:
        return 'Not Found';
      case HTTP_STATUS.UNPROCESSABLE_ENTITY:
        return 'Unprocessable Entity';
      case HTTP_STATUS.INTERNAL_SERVER_ERROR:
        return 'Internal Server Error';
      default:
        return `Error Code: ${statusCode}`;
    }
  }
}

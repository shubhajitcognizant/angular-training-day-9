import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewsInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('posts')) {
      // Modify the request if needed
      const modifiedRequest = request.clone({
        setHeaders: {
          'Custom-Header': 'custom-value'
        }
      });
      return next.handle(modifiedRequest);
    } else {
      return next.handle(request);
    }
    
    
  }
}

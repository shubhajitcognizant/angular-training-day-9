import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class NewsInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('posts')) {
      // Modify the request if needed
      const modifiedRequest = request.clone({
        setHeaders: {
          'Custom-Header': 'custom-value',
          'X-Parameter': '1'
        }
      });
      return next.handle(modifiedRequest).pipe(
        map(event => {
          if (event instanceof HttpResponse) {
            console.log('Response:', event.body);
            const modifiedResponse = event.clone({
              body: {
                ...event.body,
                customProperty: 'customValue'
              }
            });
            console.log('Modified Response:', modifiedResponse.body);
            return modifiedResponse;
          }
          return event;
        })
      );
    } else {
      return next.handle(request);
    }
  }}

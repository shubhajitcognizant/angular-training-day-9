import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { NewsList } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Fetches news articles from the API.
   * @returns An observable containing the news articles.
   */
  getNewsList(): Observable<NewsList> {
    return this.httpClient.get<NewsList>('https://dummyjson.com/posts')
      .pipe(
        catchError((error) => {
          console.error('Error fetching news:', error);
          // this.getNewsListError();
          throw error;
        })
      );
    }

  /**
   * Handles errors when fetching news articles.
   */
  getNewsListError(): void {
    alert('Error fetching news');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { NewsList, NewsListPosts } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  /**
   * Behavior subject to show or hide component.
   */
  public isVisible: BehaviorSubject<boolean> = new BehaviorSubject(true);

  /**
   * Observable to show or hide the component.
   */
  public isVisible$: Observable<boolean> = this.isVisible.asObservable();

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
   * Toggles the visibility of the component.
   */
  toggleVisibility(value: boolean): void {
    this.isVisible.next(value);
  }

  /**
   * Fetches a specific news article by its ID.
   * @param id The ID of the news article.
   */
  getNewsById(id: number): Observable<NewsListPosts> {
    return this.httpClient.get<NewsListPosts>(`https://dummyjson.com/posts/${id}`)
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

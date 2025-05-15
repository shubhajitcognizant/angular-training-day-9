import { Component, OnInit } from '@angular/core';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsService } from './news.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NewsList } from './news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, NewsItemComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {

  public newsList$: Observable<NewsList> | undefined;

  constructor(
    private newsService: NewsService
  ) {}
  
  ngOnInit() {
    this.newsList$ = this.newsService.getNewsList();
  }
}

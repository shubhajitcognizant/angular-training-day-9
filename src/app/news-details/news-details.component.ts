import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsListPosts } from '../news/news.model';
import { NewsService } from '../news/news.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent {
 /**
   * The class name for the component using host binding.
   */
  @HostBinding('class') class = 'news-details';

  public newsDetails$: Observable<NewsListPosts> | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}
  
  ngOnInit() {
    const newsId = this.route.snapshot.paramMap.get('id');
    if (newsId) {
      this.newsDetails$ = this.newsService.getNewsById(parseInt(newsId));
    }
  }
}

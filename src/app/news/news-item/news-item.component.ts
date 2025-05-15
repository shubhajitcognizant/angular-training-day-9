import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { NewsListPosts } from '../news.model';

@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.scss'
})
export class NewsItemComponent {
  /**
   * The class name for the component.
   */
  @HostBinding('class') class = 'news-item col-12 col-md-6';

  /**
   * The news item to display.
   */
  @Input() newsItem: NewsListPosts | undefined;

}

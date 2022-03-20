import {Component} from '@angular/core';
import {NEWS} from "../../constants/news.constants";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  public newsMDPath = `assets/news.md`;
  public NEWS = NEWS;
}

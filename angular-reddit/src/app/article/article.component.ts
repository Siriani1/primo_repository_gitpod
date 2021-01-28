import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';

  votes: number;
  link: string;
  title: string;

  constructor() {
    this.votes = 10;
    this.link = 'http://angular.io'
    this.title = 'Angular 2'

   }

  voteUp():Boolean {
    this.votes += 1;
    return false;
  }

  voteDown():Boolean {
    this.votes -= 1;
    return false;
  }

  ngOnInit(): void {
  }

}

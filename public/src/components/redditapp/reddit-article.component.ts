import { Component } from '@angular/core';
import { Article } from './reddit';

@Component({
  selector: 'reddit-article',
  host: {
    class: 'row'
  },
  inputs: ['article'],
  template: `

    <div class="col-sm-3 votes">
      <div class="card card-block">
        <div>
          <h2>{{ article.votes }}</h2>
        </div>
        <div>
          Points
        </div>
      </div>
    </div>
    <div class="col-sm-9 card">
        <div class="card-block">
        <h4 class="card-title">
            <a href="{{ article.link }}">
        {{ article.title }}
      </a>
      </h4>
      
      
        <a href="" (click)="voteUp()" class="btn btn-success btn-success-outline">
            <i class="ti-arrow-up"></i>
              upvote 
            </a>
            <a href="" (click)="voteDown()" class="btn btn-success btn-success-outline">
            <i class="ti-arrow-down"></i>
            downvote
          </a>
          <div>
          </div>   
    </div>
  `
})

export class ArticleComponent {
  article: Article;
  
  constructor(){
    this.article = new Article('Angular 2', 'http://angular.io', 10);    
  }
  
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;    
  }
}
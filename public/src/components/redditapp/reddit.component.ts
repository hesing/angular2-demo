import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from './reddit-article.component';
import { Article } from './reddit';

@Component({
    selector: 'redditapp',
    template: `
        <form>
      <h3>Add a Link</h3>

      <div class="form-group">
        <label for="title">Title:</label>
        <input name="title" #newtitle class="form-control">
      </div>
      <div class="form-group">
        <label for="link">Link:</label>
        <input name="link" #newlink class="form-control">
      </div>

      <button (click)="addArticle(newtitle, newlink)"
              class="btn btn-primary">
        Submit link
      </button>
    </form>

    <reddit-article *ngFor="let myArticle of sortedArticles()"
                [article]="myArticle"></reddit-article>
    ` ,
    directives: [ArticleComponent]
})
export class RedditAppComponent implements OnInit {
    articles: Article[];
    
    constructor() { 
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    }
    
    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
    ngOnInit() { }

}
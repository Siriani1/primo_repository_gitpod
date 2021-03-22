import { Component } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feisbuc-siriani';

  posts:Post[] = new Array<Post>();

  addPost(nome: HTMLInputElement, testo: HTMLInputElement): boolean{
    this.posts.push(new Post(nome.value,testo.value))
    console.log(this.posts)
    return false;
  }
}

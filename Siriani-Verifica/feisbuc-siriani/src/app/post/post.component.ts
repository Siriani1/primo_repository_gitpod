import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  commento = new Array<string>();

  Like(): boolean{
    this.post.voteUp();
    return false;
  }

  addCommento(commento: HTMLInputElement): boolean{
    this.commento.push(commento.value);
    return false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

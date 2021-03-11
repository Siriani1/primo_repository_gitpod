import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  @Input() email: Email;

  constructor() { }

  espando: boolean;

  espandi(): void {
    if(this.espando == true){
      this.espando = false;
    }else{
      this.espando = true;
    }
  }

  ngOnInit(): void {
  }

}

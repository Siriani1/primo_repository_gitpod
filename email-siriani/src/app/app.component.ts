import { Component } from '@angular/core';
import { Email } from './email.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-siriani';

  emails:Email[] = new Array<Email>();

  constructor(){

  }


  addEmail(a: HTMLInputElement, oggetto: HTMLInputElement, testo : HTMLInputElement): boolean {
    this.emails.push(new Email(a.value,oggetto.value,testo.value))
    console.log(this.emails)
    return false;
  }

}

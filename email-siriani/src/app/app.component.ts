import { Component } from '@angular/core';
import { Email } from './models/email.model';
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails:Email[];

  constructor(){
    this.emails = []

  }

  sendEmail(a:HTMLInputElement, oggetto:HTMLInputElement, testo:HTMLInputElement): boolean{
    this.emails.push(new Email(a.value,oggetto.value,testo.value))
    a.value = '';
    oggetto.value = '';
    testo.value = '';
    return false;
  }
}

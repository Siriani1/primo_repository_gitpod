import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mezzo } from './model/driving.model'
import { Observable } from 'rxjs';
import { Rent } from './model/rent.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  obsMezzi: Observable<Mezzo[]>;
  listaMezzi: Mezzo[];
  rented: Mezzo = new Mezzo("#","#","#","#");

  rentedVector: Rent[] = new Array<Rent>();
// importare dentro app.module.ts HttpClientModule
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.obsMezzi = this.http.get<Mezzo[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi');
    this.obsMezzi.subscribe(this.getMezzi);

  }

  getMezzi = (data : Mezzo[]) => {
    this.listaMezzi = data;
    console.log(this.listaMezzi);
  }


}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vegetali } from './model/vegetables.model';
import { Cart } from './model/cart_product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'es';
  obsVeg : Observable<Vegetali[]>
  listaVeg : Vegetali[];
  constructor(private http: HttpClient){}

  details: Vegetali = new Vegetali("#","#","#");

  cart_product: Cart[] = new Array<Cart>();

  ngOnInit(): void {
    this.obsVeg = this.http.get<Vegetali[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure');
    this.obsVeg.subscribe(this.getVeg);
  }

  getVeg = (data: Vegetali[]) => {
    this.listaVeg = data;
    console.log(this.listaVeg);
  }

}

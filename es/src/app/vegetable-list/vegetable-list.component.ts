import { Component, OnInit, Input } from '@angular/core';
import { Vegetali } from '../model/vegetables.model';
import { Cart } from '../model/cart_product.model';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent implements OnInit {
  @Input() listaVeg : Vegetali[];
  @Input() details: Vegetali;
  @Input() cart_product: Cart[];
  constructor() { }

  ngOnInit(): void {
  }

  Compra(veg: Vegetali){
    this.details.nome = veg.nome;
    this.details.descrizione = veg.descrizione;
    this.details.prezzo = veg.prezzo;

    let v = new Cart();
    v.numeroNoleggi = 1;
    v.vegetale = veg;

    this.cart_product.push(v);
  }



}

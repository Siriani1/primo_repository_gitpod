import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../model/cart_product.model';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  @Input() cart_product: Cart[];
  constructor() { }

  ngOnInit(): void {
  }

}

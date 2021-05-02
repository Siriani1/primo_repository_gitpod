import { Component, OnInit, Input } from '@angular/core';
import { Vegetali } from '../model/vegetables.model';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent implements OnInit {
  @Input() listaVeg : Vegetali[];
  constructor() { }

  ngOnInit(): void {
  }

}

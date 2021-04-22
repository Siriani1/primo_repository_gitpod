import { Component, OnInit, Input } from '@angular/core';
import { Mezzo } from '../model/driving.model';
import { RentedComponent } from '../rented/rented.component';
import { Rent } from '../model/rent.model';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  @Input() listaMezzi: Mezzo[];
  @Input() rented: Mezzo;
  @Input() rentedVector: Rent[];

  constructor() { }

  ngOnInit(): void {
  }

  Noleggia(mezzo: Mezzo){
    this.rented.tipo = mezzo.tipo;
    this.rented.descrizione = mezzo.descrizione;
    this.rented.tariffa = mezzo.tariffa;
    this.rented.valutazionemedia = mezzo.valutazionemedia;

    let r = new Rent();
    r.numeroNoleggi = 1;
    r.mezzo = mezzo;

    this.rentedVector.push(r)

  }
}

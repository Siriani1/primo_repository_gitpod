import { Component, OnInit, Input } from '@angular/core';
import { Rent } from '../model/rent.model';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
  @Input() rentedVector: Rent[] = new Array<Rent>();

  constructor() {}

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Mezzo } from '../model/driving.model';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  @Input() listaMezzi: Mezzo[];
  constructor() { }

  ngOnInit(): void {
  }

  Noleggia(mezzo){
    console.log(mezzo);
  }
}

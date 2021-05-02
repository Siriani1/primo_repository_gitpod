import { Component, OnInit, Input } from '@angular/core';
import { Vegetali } from '../model/vegetables.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() details: Vegetali;
  constructor() { }

  ngOnInit(): void {
  }

}

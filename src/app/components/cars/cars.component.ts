import { Component, OnInit } from '@angular/core';
import {carsArr} from '../../data/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = carsArr;
  constructor() { }

  ngOnInit(): void {
  }

}

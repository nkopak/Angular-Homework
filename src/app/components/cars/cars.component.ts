import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services';
import {ICar} from '../../models';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];

  constructor( private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => this.cars = value);
  }

}

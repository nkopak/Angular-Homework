import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Car} from '../../../model/car';

@Component({
  selector: 'app-full-car',
  templateUrl: './full-car.component.html',
  styleUrls: ['./full-car.component.css']
})
export class FullCarComponent implements OnInit {
  carInfo;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.carInfo = value;
    });
  }

  ngOnInit(): void {
  }

}

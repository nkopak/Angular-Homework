import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICar} from '../models/car';
import {URL} from '../config/urls';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(URL.apiCars);
  }
  create(car: Partial<ICar>): Observable<ICar>{
    return this.httpClient.post<ICar>(URL.apiCars, car);
  }
}

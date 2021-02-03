import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CarService} from '../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  error: any;

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      brand: new FormControl(''),
      model: new FormControl(''),
      year: new FormControl('')
    });
  }

  save(form: FormGroup): void {
    this.carService.create(form.getRawValue()).subscribe(value => {
      console.log(value);
      this.router.navigate(['cars']);
    }, error => this.error = error.error);
  }
}

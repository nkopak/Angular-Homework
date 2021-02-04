import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from '../interfaces/user';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  greet: string = 'Hello, my name is ';

  transform(value: IUser[]): string[] {
    return value.map(value1 => this.greet + value1.name);
  }

}

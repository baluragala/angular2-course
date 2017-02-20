/**
 * Created by moksha on 17/02/17.
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'powerof'})
export class PowerOfPipe implements PipeTransform {
  transform(value: number, toPower: string, add: string ): number {
    let exp = parseFloat(toPower);
    return ( Math.pow(value, isNaN(exp) ? 1 : exp) + parseFloat(add));
  }
}

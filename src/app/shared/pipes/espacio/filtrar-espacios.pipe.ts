import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarEspacios'
})
export class FiltrarEspaciosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

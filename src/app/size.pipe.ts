import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args.includes('upper')) {
      value = value.toUpperCase();
    }
    return value + ' = ' + value.length;
  }

}

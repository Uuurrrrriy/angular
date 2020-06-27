import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): unknown {
    console.log(value);

    const [field, fValue] = args;

    const filter = value.filter(value1 => value1[field] === fValue);

    console.log(filter);

    return filter;
  }

}

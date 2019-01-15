import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];
    // tslint:disable-next-line:forin
    for ( let key in value) {
      keys.push(key);
    }
    return keys;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windSpeed'
})
export class WindSpeedPipe implements PipeTransform {

  transform(speed: number): number {
    let a = speed * 3.6;
    return a;
  }

}

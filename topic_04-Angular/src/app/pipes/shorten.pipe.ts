import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string | undefined, length?: number): string {
    // return value?.substr(0, 5) + '...';
    return value?.substr(0, length ? length : 3) + '...';
  }
}

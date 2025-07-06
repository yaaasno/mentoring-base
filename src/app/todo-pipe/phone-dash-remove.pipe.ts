import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDashes',
  standalone: true
})
export class PhoneDashRemovePipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.replace(/-/g, '') : value;
  }
}

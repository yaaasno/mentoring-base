import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'customLimit',
  standalone: true,
  pure: true
})

export class CustomLimitPipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value !== 'string') return '';
      return value.length > 20 ? value.slice(0, 20) + '...' : value;
  }
}


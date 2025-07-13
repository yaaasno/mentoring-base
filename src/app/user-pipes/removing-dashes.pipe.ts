import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customRemoveDashes',
  standalone: true,
  pure: true
})

export class RemoveDashesPipe implements PipeTransform {
  transform(text: string): string {
    return text.replace(/-/g, '');
  }
}

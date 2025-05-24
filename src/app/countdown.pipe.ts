import { Pipe, PipeTransform } from '@angular/core';
import { TvShowDetails } from './types';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'countdown',
  standalone: true
})
export class CountdownPipe implements PipeTransform {

  transform(value: TvShowDetails): string {
    if (value.countdown?.air_date) {
      return 'Next episode in ' + formatDistanceToNow(value.countdown.air_date);
    }
    if (value.status === 'Ended' || value.status === 'Canceled/Ended') {
      return 'The show has ended';
    }
    return `${value.status} but no next episode date`;
  }

}

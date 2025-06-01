import { Component, Input } from '@angular/core';
import { TvShowDetails } from '../types';
import { DatePipe, DecimalPipe, I18nPluralPipe } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-tv-show-details',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    I18nPluralPipe,
    CardComponent
  ],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css'
})
export default class TvShowDetailsComponent {
  @Input()
  showDetails!: TvShowDetails;

  back() {
    history.back();
  }
}

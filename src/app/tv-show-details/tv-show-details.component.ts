import { Component, Input } from '@angular/core';
import { TvShowDetails } from '../types';
import { DatePipe, DecimalPipe, I18nPluralPipe, NgForOf } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-tv-show-details',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    I18nPluralPipe,
    CardComponent,
    NgForOf
  ],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css'
})
export default class TvShowDetailsComponent {
  @Input()
  showDetails!: TvShowDetails;

  currentImage!: string;

  back() {
    history.back();
  }
}

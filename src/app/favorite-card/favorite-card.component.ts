import { Component, Input } from '@angular/core';
import { TvShowDetails } from '../types';
import { RouterLink } from '@angular/router';
import { CountdownPipe } from '../countdown.pipe';
import { ToogleFavoriteDirective } from '../toogle-favorite.directive';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [
    RouterLink,
    CountdownPipe,
    ToogleFavoriteDirective
  ],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css'
})
export class FavoriteCardComponent {
  @Input({required: true})
  tvShowDetails!: TvShowDetails;
}

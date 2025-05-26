import { Component, Input } from '@angular/core';
import { TvShowDetails } from '../types';
import { RouterLink } from '@angular/router';
import { ToggleFavoriteDirective } from '../toggle-favorite.directive';
import { CountdownPipe } from '../countdown.pipe';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [
    RouterLink,
    ToggleFavoriteDirective,
    CountdownPipe
  ],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css'
})
export class FavoriteCardComponent {
  @Input({required: true})
  tvShowDetails!: TvShowDetails;
}

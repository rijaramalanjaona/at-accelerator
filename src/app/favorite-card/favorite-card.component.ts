import { Component, inject, Input } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { TvShowDetails } from '../types';
import { RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css'
})
export class FavoriteCardComponent {
  protected favoritesService = inject(FavoritesService);

  @Input({required: true})
  tvShowDetails!: TvShowDetails;
}

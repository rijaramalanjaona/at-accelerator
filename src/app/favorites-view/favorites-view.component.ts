import { Component, inject } from '@angular/core';
import { FavoritesViewService } from '../favorites-view.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites-view',
  templateUrl: './favorites-view.component.html',
  styleUrls: ['./favorites-view.component.css']
})
export class FavoritesViewComponent {
  protected favoritesViewService = inject(FavoritesViewService);
  protected favoritesService = inject(FavoritesService);
}

import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private localStorageService = inject(LocalStorageService);
  private _favoriteIds: number[] = [];

  toggleFavorite(id: number) {
    this.refreshFavorites();
    if (this._favoriteIds.includes(id)) {
      this._favoriteIds = this._favoriteIds.filter(item => item !== id);
    } else {
      this._favoriteIds.push(id);
    }
    this.localStorageService.setValue<number[]>('favoriteIds', this._favoriteIds);
  }

  refreshFavorites() {
    this._favoriteIds = this.localStorageService.getValue<number[]>('favoriteIds') ?? [];
  }

  get favoriteIds() {
    return this._favoriteIds;
  }
}

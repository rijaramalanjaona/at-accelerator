import { Directive, HostBinding, HostListener, inject, Input } from '@angular/core';
import { TvShowId } from './types';
import { FavoritesService } from './favorites.service';

@Directive({
  selector: '[appToogleFavorite]',
  standalone: true
})
export class ToogleFavoriteDirective {
  private favoritesService = inject(FavoritesService);

  _tvShowId!: TvShowId;

  @Input()
  set tvShowId(value: TvShowId) {
    this._tvShowId = value;
    this.hasHighlight = this.favoritesService.favorites().includes(this._tvShowId);
  }

  @HostBinding('class.highlight')
  hasHighlight = false;

  @HostListener('click')
  click(): void {
    this.favoritesService.toggleFavorite(this._tvShowId);
    this.hasHighlight = this.favoritesService.favorites().includes(this._tvShowId);
  }
}

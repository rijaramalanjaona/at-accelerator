import { Directive, effect, HostBinding, HostListener, inject, Input } from '@angular/core';
import { TvShowId } from './types';
import { FavoritesService } from './favorites.service';

@Directive({
  selector: '[appToogleFavorite]',
  standalone: true
})
export class ToogleFavoriteDirective {
  private favoritesService = inject(FavoritesService);

  constructor() {
    effect(() => this.hasHighlight = this.favoritesService.favorites().includes(this.tvShowId));
  }

  @Input()
  tvShowId!: TvShowId;

  @HostBinding('class.highlight')
  hasHighlight = false;

  @HostListener('click')
  click(): void {
    this.favoritesService.toggleFavorite(this.tvShowId);
  }
}

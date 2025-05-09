import { Component, effect, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { SearchService } from '../search.service';
import { TvShow } from '../types';
import { FavoriteService } from '../favorite.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {
  protected searchService = inject(SearchService);
  protected favoriteService = inject(FavoriteService);
  protected data!: Signal<TvShow[]>;
  private storage = toSignal(fromEvent(window, 'storage'));

  constructor() {
    this.runSearch();
    effect(() => {
      console.log('effect storage', this.storage());
      this.favoriteService.refreshFavorites();
    });
  }

  runSearch(term = '', event?: Event) {
    event?.preventDefault();
    this.data = this.searchService.search(term);
  }

  onManageFavoriteId(id: number) {
    this.favoriteService.toggleFavorite(id);
  }
}

import { Component, inject, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { SearchService } from '../search.service';
import { TvShow } from '../types';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent, PaginatorComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {
  protected searchService = inject(SearchService);
  private searchTerm = signal('');
  protected data!: Signal<TvShow[]>;

  constructor() {
    this.runSearch();
  }

  runSearch(term = '', event?: Event) {
    event?.preventDefault();
    this.searchTerm.set(term);
    this.data = this.searchService.search(term);
  }

  changePage($event: number) {
    this.data = this.searchService.search(this.searchTerm(), $event);
  }
}

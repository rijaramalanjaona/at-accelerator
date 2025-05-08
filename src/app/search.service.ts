import { Injectable, Signal, signal } from '@angular/core';
import { SearchResponse, TvShow } from './types';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searching = signal(false);
  readonly isSearching = this.searching.asReadonly();
  private lastSearchResults = signal<TvShow[]>([]);

  constructor(private http: HttpClient) { }

  search(term = ''): Signal<TvShow[]> {
    this.lastSearchResults.set([]);
    this.searching.set(true);
    this.http.get<SearchResponse>(API_URL + `search?q=${term}&page=1`).subscribe(data => {
      this.lastSearchResults.set(data.tv_shows);
      this.searching.set(false);
    });
    return this.lastSearchResults.asReadonly();
  }
}

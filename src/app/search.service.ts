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

  private currentPage = signal(1);
  readonly page = this.currentPage.asReadonly();
  private numberOfPage = signal(0);
  readonly pages = this.numberOfPage.asReadonly();

  constructor(private http: HttpClient) { }

  search(term = '', currentPage = 1): Signal<TvShow[]> {
    this.lastSearchResults.set([]);
    this.searching.set(true);
    const url = term ? `search?q=${term}&page=${currentPage}` : `most-popular?page=${currentPage}`;
    this.http.get<SearchResponse>(API_URL + url).subscribe(data => {
      this.lastSearchResults.set(data.tv_shows);
      this.currentPage.set(data.page);
      this.numberOfPage.set(data.pages);
      this.searching.set(false);
    });
    return this.lastSearchResults.asReadonly();
  }
}

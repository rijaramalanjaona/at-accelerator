import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShow, TvShowDetails } from './types';
import { API_URL } from './app.constants';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {
  private http = inject(HttpClient);

  getById(id: string): Observable<TvShow> {
    return this.http.get<TvShowDetails>(API_URL + `show-details?q=${id}`).pipe(
      map(tvShowDetails => tvShowDetails.tvShow)
    );
  }
}

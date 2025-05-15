import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode, TvShowDetails, TvShowId } from './types';
import { map, Observable, tap } from 'rxjs';
import { API_URL } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {
  private http = inject(HttpClient);
  private _seasonCount = signal(0);
  readonly seasonCount = this._seasonCount.asReadonly();

  getShowDetails(showId: TvShowId): Observable<TvShowDetails> {
    return this.http.get<{tvShow: TvShowDetails}>(`${API_URL}show-details?q=${showId}`).pipe(
      map(data => data.tvShow),
      tap(tvShowDetails => this._seasonCount.set(this.countSeason(tvShowDetails.episodes)))
    );
  }

  private countSeason(episodes: Episode[]): number {
    return episodes
      .map(episode => episode.season)
      .reduce((accumulator, current) => accumulator.add(current), new Set())
      .size;
  }
}

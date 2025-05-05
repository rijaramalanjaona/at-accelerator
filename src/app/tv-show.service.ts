import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiResponse } from './models/api-response';
import { TvShow } from "./models/tv-show";

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private readonly http = inject(HttpClient);
  private readonly EPISODATE_API_SEARCH = 'https://www.episodate.com/api/search';

  getTvShows(querySearch: string):Observable<TvShow[]> {
    return this.http.get<ApiResponse>(`${this.EPISODATE_API_SEARCH}?q=${querySearch}&page=1`).pipe(
      map((response: ApiResponse) => {
        response.tv_shows.forEach((tvShow: TvShow) => {
          if (typeof tvShow.start_date == 'string') {
            tvShow.start_date = new Date(tvShow.start_date);
          }
        });

        return response.tv_shows;
      })
    );
  }
}

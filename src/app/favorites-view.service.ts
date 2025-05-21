import { inject, Injectable } from '@angular/core';
import { FavoritesService } from './favorites.service';
import { TvShowDetailsService } from './tv-show-details.service';
import { forkJoin, map, shareReplay, switchMap } from 'rxjs';
import { StatusPriority, TvShowDetails, TvShowId, TvShowIds } from './types';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class FavoritesViewService {
  private favoritesService = inject(FavoritesService);
  private tvShowDetailsService = inject(TvShowDetailsService);

  private favorites$ = toObservable(this.favoritesService.favorites);
  source$ = this.favorites$
      .pipe(
       switchMap((tvShowIds: TvShowIds) =>
          forkJoin(
            tvShowIds.map((tvShowId: TvShowId) => this.tvShowDetailsService.getShowDetails(tvShowId))
          )
       ),
        map(result => result.sort(
          (a, b) => this.sortByStatus(a, b))),
        map(result => result.sort(
          (a, b) => this.sortByCountDown(a, b))),
        map(result => result.sort(
          (a, b) => this.sortByNextEpisodeSoonest(a, b))),
        shareReplay(1)
    );

  private sortByStatus(a: TvShowDetails, b: TvShowDetails): number {
    const statusPriority: StatusPriority = {
      'Canceled/Ended': 3,
      'Ended': 3,
      'Running': 1,
      'New Series': 2,
      'To Be Determined': 2
    }
    if (statusPriority[a.status] < statusPriority[b.status]) {
      return -1;
    } else if (statusPriority[a.status] > statusPriority[b.status]) {
      return 1;
    }
    return 0;
  }

  private sortByCountDown(a: TvShowDetails, b: TvShowDetails): number {
    if (a.countdown && !b.countdown) {
      return -1;
    } else if (!a.countdown && b.countdown) {
      return 1;
    }
    return 0;
  }

  private sortByNextEpisodeSoonest(a: TvShowDetails, b: TvShowDetails): number {
    const airDate1 = a.countdown?.air_date;
    const time1 = airDate1 ? new Date(airDate1).getTime(): 0;
    const airDate2 = b.countdown?.air_date;
    const time2 = airDate2 ? new Date(airDate2).getTime(): 0;
    if (time1 && time2 && time1 < time2) {
      return -1;
    } else if (time1 && time2 && time1 > time2) {
      return 1;
    }
    return 0;
  }

}

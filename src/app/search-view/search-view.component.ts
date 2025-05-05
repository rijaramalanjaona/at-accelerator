import { Component, inject, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { TvShowService } from '../tv-show.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { TvShow } from '../models/tv-show';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {
  private readonly tvShowService = inject(TvShowService);

  querySearch = signal('');

  readonly tvShows: Signal<TvShow[] | undefined> = toSignal(
    toObservable(this.querySearch).pipe(
      switchMap(
        (q: string) => this.tvShowService.getTvShows(q)
      )
    )
  );
}

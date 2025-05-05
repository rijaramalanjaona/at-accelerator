import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShow } from "../models/tv-show";

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
  tvShows: InputSignal<TvShow[] | undefined> = input<TvShow[] | undefined>();
  readonly loading: Signal<boolean> = computed(() => !this.tvShows());
}

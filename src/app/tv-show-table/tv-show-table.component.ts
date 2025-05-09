import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { TvShow } from '../types';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
  @Input({required: true})
  shows!: TvShow[];

  @Input()
  isLoading = false;

  @Input()
  favoriteIds: number[] = [];

  @Output()
  manageFavoriteId = new EventEmitter<number>();

  toggleFavorite(id: number) {
    this.manageFavoriteId.emit(id);
  }
}

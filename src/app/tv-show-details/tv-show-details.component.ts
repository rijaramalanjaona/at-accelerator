import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TvShow } from '../types';
import { DatePipe, DecimalPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-tv-show-details',
  standalone: true,
  imports: [
    NgIf,
    DatePipe,
    RouterLink,
    DecimalPipe
  ],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css'
})
export class TvShowDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  tvShow: TvShow | undefined;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( ({tvShow}) => {
      this.tvShow = tvShow;
    });
  }
}

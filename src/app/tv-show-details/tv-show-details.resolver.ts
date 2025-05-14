import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TvShowDetails } from '../types';
import { inject } from '@angular/core';
import { TvShowDetailsService } from '../tv-show-details.service';

export function showDetailsResolver(route: ActivatedRouteSnapshot): Observable<TvShowDetails> {
  const id = Number(route.paramMap.get('id'));
  return inject(TvShowDetailsService).getShowDetails(id);
}

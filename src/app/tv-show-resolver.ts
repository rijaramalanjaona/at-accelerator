import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { TvShow } from './types';
import { inject } from '@angular/core';
import { TvShowDetailsService } from './tv-show-details.service';
import { Observable } from 'rxjs';

export const tvShowResolver: ResolveFn<Observable<TvShow>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(TvShowDetailsService).getById(route.paramMap.get('id')!);
};

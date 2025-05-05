import { TvShow } from './tv-show';

export interface ApiResponse {
  total:    number;
  page:     number;
  pages:    number;
  tv_shows: TvShow[];
}

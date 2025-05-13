export interface SearchResponse {
  total:    string;
  page:     number;
  pages:    number;
  tv_shows: TvShow[];
}

export interface TvShow {
  id:                   number;
  name:                 string;
  permalink:            string;
  url:                  string;
  description:          string;
  description_source:   null;
  start_date:           string | Date;
  end_date:             null | string;
  country:              string;
  status:               Status;
  runtime:              number;
  network:              string;
  youtube_link:         null;
  image_path:           string;
  image_thumbnail_path: string;
  rating:               string;
  rating_count:         number;
  countdown:            Countdown;
  genres:               string[];
  pictures:             string[];
  episodes:             Countdown[];
}

export interface TvShowDetails {
  tvShow: TvShow;
}

export interface Countdown {
  season:   number;
  episode:  number;
  name:     string;
  air_date: Date;
}

export type Status = 'Canceled/Ended' | 'Ended' | 'Running' | 'New Series' | 'To Be Determined';

export type TvShowId = TvShow['id']; // This is better than number

export type TvShowIds = Array<TvShowId>; // This is easier to read

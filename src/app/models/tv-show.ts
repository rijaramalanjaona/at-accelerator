export interface TvShow {
  id:                   number;
  name:                 string;
  permalink:            string;
  start_date:           string | Date;
  end_date:             null | string;
  country:              string;
  network:              string;
  status:               Status;
  image_thumbnail_path: string;
}

export type Status = 'Canceled/Ended' | 'Ended';

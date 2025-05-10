import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import {TvShowIds} from "./types";

describe('StorageService', () => {
  let service: StorageService<TvShowIds>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

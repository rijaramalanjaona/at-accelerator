import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setValue<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getValue<T>(key: string): T {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value ?? '{}') : null;
  }
}

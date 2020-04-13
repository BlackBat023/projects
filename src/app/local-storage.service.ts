import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { inject } from '@angular/core/testing';

const STORAGE_KEY = 'worldStatus';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  public setStorage(statsTitle: string, statsValue: any) {
    localStorage.setItem(statsTitle, JSON.stringify(statsValue));
  }

  public getStorage() {
    let worldStats = this.storage.get(STORAGE_KEY) || [];
    console.log(worldStats);
    return worldStats;
  }
}

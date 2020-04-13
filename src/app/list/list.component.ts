import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cases = [];
  countries: Object;

  constructor(
    private _http: HttpService,
    private _localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    this._http.getCases().subscribe((data) => {
      this.cases = data;
      //console.log(this.cases);
      this._localStorage.setStorage(
        'countryStatus',
        this.cases[1].countries_stat
      );
      this._localStorage.setStorage('worldStatus', this.cases[0]);
    });
  }

  getChanges() {
    let storageStats = [];
    storageStats.push(this._localStorage.getStorage().worldStats);
    myClasses = {};
    console.log(storageStats);
  }
}

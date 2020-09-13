import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cases = [];
  countries: Object;
  search: any;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getCases().subscribe((data) => {
      this.cases = data;
      //console.log(this.cases);
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getCases() {
    const apiUrl = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/';
    const data1 = this.http.get(apiUrl + 'worldstat.php', {
      headers: {
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '1c293e3c53mshcc39f819a79c3c7p10963ajsnd0d298341d5f',
      },
    });
    const data2 = this.http.get(apiUrl + 'cases_by_country.php', {
      headers: {
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': '1c293e3c53mshcc39f819a79c3c7p10963ajsnd0d298341d5f',
      },
    });
    return forkJoin([data1, data2]);
  }
}

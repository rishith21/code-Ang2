import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class HolidaysService {

  private _apiURL: string = '../../mock/data.json';
  //private _apiURL: string = 'https://holidayapi.com/v1/holidays';

  constructor(
    private _http: Http
  ) { }

  getListOfHolidays(): Observable<any> {
    let headers = new Headers({
      'key': 'c0898b81-c571-4ad4-8a39-4ab5dbc0f7c0',
      'country': 'US', 
      'year': 2015
    });
    let options = new RequestOptions({ headers: headers });
    
    return this._http.get(this._apiURL, options)
      .map((res: Response) => res.json());
  }
}

import { Injectable } from '@angular/core';
import { serverUrl1 } from '../shared/data/server-conf';
import { serverUrl2 } from '../shared/data/server-conf';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../shared/data/Category';
import { CountryCode } from '../shared/data/CountryCode';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private baseUrl1: string = serverUrl1;
  private baseUrl2: string = serverUrl2;
  constructor(private http: HttpClient) { }


  public GetCategoryData(): Observable<Category> {
    return this.http.get<Category> (
      this.baseUrl1 + `Category`
    );
  }

  public GetCountryCode(): Observable<CountryCode> {
    return this.http.get<CountryCode>(
      this.baseUrl2 + `Country`
    );
  }
}

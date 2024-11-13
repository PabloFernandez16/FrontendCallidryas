import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../Models/response';
import { Driver } from '../Models/driver';

const httpOptions = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApidriverService {

  url: string = 'http://localhost:5247/api/Driver';

  constructor(
    private _http: HttpClient
  ) { }

  getDrivers(): Observable<Response> {
    return this._http.get<Response>(this.url);
  }


  add(driver: Driver): Observable<Response> {
    return this._http.post<Response>(this.url, driver,httpOptions);
  }
  
}



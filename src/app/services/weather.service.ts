import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    let lat = 50.63;
    let lon = 3.06;
    let apiId = 'a808bbdd25c19c07019ecc76ae5d7384';
  let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`;

    return this.http.get(queryString);
  }
}

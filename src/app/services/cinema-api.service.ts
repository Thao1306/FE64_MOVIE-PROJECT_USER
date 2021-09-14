import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinemaApiService {
  constructor(private http: HttpClient) {}

  fetchCinemas = (): Observable<any> => {
    return this.http.get(
      'https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap'
    );
  };

  fetchCinemaSystem = (cinemaSystemId: string): Observable<any> => {
    return this.http.get(
      'https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap',
      {
        params: {
          maHeThongRap: cinemaSystemId,
        },
      }
    );
  };
}

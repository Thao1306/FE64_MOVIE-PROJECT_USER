import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  fetchMovieBanner = (): Observable<any> => {
    return this.http.get(
      'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner'
    );
  };
}

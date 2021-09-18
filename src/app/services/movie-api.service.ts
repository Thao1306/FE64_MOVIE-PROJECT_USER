import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../models/movies';

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

  fetchMovieList = (): Observable<any> => {
    return this.http.get(
      'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim'
    );
  };

  fetchMovieDetail = (movieId: string): Observable<any> => {
    return this.http.get(
      'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim',
      {
        params: {
          MaPhim: movieId,
        },
      }
    );
  };
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie, IMovieBanner } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movieBanners = new BehaviorSubject<IMovieBanner[]>([]);
  movieList = new BehaviorSubject<IMovie[]>([]);

  movieDetail = new BehaviorSubject<IMovie | null>(null);

  setMovieBanners = (banners: IMovieBanner[]) => {
    this.movieBanners.next(banners);
  };

  setMovieList = (movies: IMovie[]) => {
    this.movieList.next(movies);
  };

  setMovieDetail = (movie: IMovie) => {
    this.movieDetail.next(movie);
  };

  constructor() {}
}

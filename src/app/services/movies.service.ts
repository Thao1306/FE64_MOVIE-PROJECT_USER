import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie, IMovieBanner } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movieBanners = new BehaviorSubject<IMovieBanner[] > ([]);
  movieList = new BehaviorSubject<IMovie[]> ([])

  setMovieBanners = (banners: IMovieBanner[]) => {
    this.movieBanners.next(banners)
  }

  setMovieList = (movies: IMovie[]) => {
    this.movieList.next(movies)
  }

  constructor() {}
}

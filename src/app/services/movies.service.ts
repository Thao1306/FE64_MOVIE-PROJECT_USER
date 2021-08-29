import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovieBanner } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movieBanners = new BehaviorSubject<IMovieBanner[] > ([]);

  setMovieBanners = (banners: IMovieBanner[]) => {
    this.movieBanners.next(banners)
  }

  constructor() {}
}

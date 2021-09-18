import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/models/movies';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  constructor(
    private movieApiSv: MovieApiService,
    private movieSV: MoviesService
  ) {}

  isLoading: boolean = true;

  nowShowingList: IMovie[] = [];
  comingSoonList: IMovie[] = [];
  fetchMovieListSubscription: Subscription | undefined;
  movieListSubscription: Subscription | undefined;

  active: boolean = true;

  fetchMovieList = () => {
    this.fetchMovieListSubscription = this.movieApiSv
      .fetchMovieList()
      .subscribe(
        (res) => {
          this.movieSV.setMovieList(res.content);
          this.isLoading = false;
        },
        (err) => {
          console.log(err);
        }
      );
  };

  handleTab = (tab: number) => {
    if (!tab) {
      this.active = true;
    } else this.active = false;
    return tab;
  };

  ngOnInit(): void {
    this.fetchMovieList();
    this.movieListSubscription = this.movieSV.movieList.subscribe(
      (movies: IMovie[]) => {
        this.nowShowingList = movies.filter(
          (movie: IMovie) => movie.dangChieu === true
        );
        this.comingSoonList = movies.filter(
          (movie: IMovie) => movie.sapChieu === true
        );
      }
    );
  }
  ngOnDestroy(): void {
    this.fetchMovieListSubscription?.unsubscribe;
    this.movieListSubscription?.unsubscribe;
  }
}

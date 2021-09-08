import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/components/modal/modal.service';
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
    private movieSV: MoviesService,
    private modalSv: ModalService
  ) {}

  nowShowingList: IMovie[] = [];
  comingSoonList: IMovie[] = [];
  movieTrailer: string | undefined = '';
  movieImg: string | undefined = '';
  isLoading: boolean = true;
  fetchMovieListSubscription: Subscription | undefined;
  movieListSubscription: Subscription | undefined;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          arrows: false,
        },
      },
    ],
  };

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

  openModalShowing = (id: string) => {
    let movie = this.nowShowingList.find(
      (item: IMovie) => item.maPhim.toString() === id
    );
    this.movieTrailer = movie?.trailer;
    this.movieImg = movie?.hinhAnh;
    setTimeout(() => {
      this.modalSv.open('custom-modal-2');
    }, 100);
  };

  openModalComing = (id: string) => {
    let movie = this.comingSoonList.find(
      (item: IMovie) => item.maPhim.toString() === id
    );
    this.movieTrailer = movie?.trailer;
    this.movieImg = movie?.hinhAnh;
    setTimeout(() => {
      this.modalSv.open('custom-modal-2');
    }, 100);
  };

  closeModal = (id: string) => {
    this.modalSv.close(id);
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

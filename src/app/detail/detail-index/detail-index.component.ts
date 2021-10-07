import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/models/movies';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { MoviesService } from 'src/app/services/movies.service';
import * as dayjs from 'dayjs';
import { ModalService } from 'src/app/components/modal/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-index',
  templateUrl: './detail-index.component.html',
  styleUrls: ['./detail-index.component.css'],
})
export class DetailIndexComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieApiSv: MovieApiService,
    private movieSv: MoviesService,
    private modalSv: ModalService,
    private router: Router
  ) {}

  movieDetail!: IMovie | null;
  srcTrailer: string = '';
  fetchMovieDetailSubscription: Subscription | undefined;
  movieDetailSubscription: Subscription | undefined;

  fetchMovieDetail = () => {
    const filmId = this.activatedRoute.snapshot.params.id;
    this.fetchMovieDetailSubscription = this.movieApiSv
      .fetchMovieDetail(filmId)
      .subscribe(
        (res) => {
          this.movieSv.setMovieDetail(res.content);
          this.checkSrcTrailer(res.content.trailer);
        },
        (err) => {
          alert(`Mã phim ${filmId} không hợp lệ`);
          this.router.navigate(['/']);
        }
      );
  };

  formatDateShowing = (date: string | undefined) => {
    return dayjs(date).format('DD/MM/YYYY');
  };

  checkSrcTrailer = (trailerSrc: string) => {
    if (trailerSrc.search('http') !== -1 && trailerSrc.search('embed') !== -1) {
      this.srcTrailer = trailerSrc;
      return;
    }
    if (trailerSrc.search('watch') !== -1) {
      const a = 'https://www.youtube.com/embed/' + trailerSrc.split('v=')[1];
      this.srcTrailer = a.split('&')[0];
    } else {
      this.srcTrailer =
        'https://www.youtube.com/embed/yF2y5y7BxgM?list=RDyF2y5y7BxgM';
    }
  };

  openModal = (id: string) => {
    this.modalSv.open(id);
  };

  closeModal = (id: string) => {
    this.modalSv.close(id);
  };

  ngOnInit(): void {
    this.fetchMovieDetail();
    this.movieDetailSubscription = this.movieSv.movieDetail.subscribe(
      (movie: IMovie | null) => {
        this.movieDetail = movie!;
      }
    );
  }

  ngOnDestroy() {
    this.fetchMovieDetailSubscription?.unsubscribe;
    this.movieDetailSubscription?.unsubscribe;
  }
}

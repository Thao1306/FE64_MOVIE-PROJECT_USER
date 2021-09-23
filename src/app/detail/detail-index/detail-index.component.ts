import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/models/movies';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { MoviesService } from 'src/app/services/movies.service';
import * as dayjs from 'dayjs';
import { ModalService } from 'src/app/components/modal/modal.service';

@Component({
  selector: 'app-detail-index',
  templateUrl: './detail-index.component.html',
  styleUrls: ['./detail-index.component.css'],
})
export class DetailIndexComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieApiSv: MovieApiService,
    private movieSv: MoviesService,
    private modalSv: ModalService
  ) {}

  movieDetail: IMovie | null | undefined;
  // @ViewChild('trailer') trailer: any;
  srcTrailer: string = '';

  fetchMovieDetail = () => {
    const filmId = this.activatedRoute.snapshot.params.id;
    this.movieApiSv.fetchMovieDetail(filmId).subscribe(
      (res) => {
        this.movieSv.setMovieDetail(res.content);
        this.srcTrailer = res.content.trailer;
      },
      (err) => {
        console.log(err);
      }
    );
  };

  formatDateShowing = (date: string | undefined) => {
    return dayjs(date).format('DD/MM/YYYY');
  };

  openModal = (id: string) => {
    // this.trailer.nativeElement.src = this.movieDetail?.trailer;
    this.modalSv.open(id);
  };

  closeModal = (id: string) => {
    this.modalSv.close(id);
  };

  ngOnInit(): void {
    this.fetchMovieDetail();
    this.movieSv.movieDetail.subscribe((movie: IMovie | null) => {
      this.movieDetail = movie;
    });
  }
}

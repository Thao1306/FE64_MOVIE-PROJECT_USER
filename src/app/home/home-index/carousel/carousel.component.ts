import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/components/modal/modal.service';
import { IMovieBanner } from 'src/app/models/movies';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  constructor(
    private movieApiSv: MovieApiService,
    private movieSv: MoviesService,
    private modalSv: ModalService
  ) {}

  movieBanners: IMovieBanner[] = [];
  isLoading: boolean = true;
  fetchMovieBannerSubscription: Subscription | undefined;
  movieBannersSubscription: Subscription | undefined;

  fetchMovieBanner = () => {
    this.fetchMovieBannerSubscription = this.movieApiSv
      .fetchMovieBanner()
      .subscribe(
        (res) => {
          this.movieSv.setMovieBanners(res.content);
          this.isLoading = false;
        },
        (err) => {
          console.log(err);
        }
      );
  };

  setActive = (item: IMovieBanner) => {
    if (item.maBanner === 1) return true;
    return false;
  };

  openModal = (id: string) => {
    this.modalSv.open(id);
  };

  closeModal = (id: string) => {
    this.modalSv.close(id);
  };

  ngOnInit(): void {
    this.fetchMovieBanner();
    this.movieBannersSubscription = this.movieSv.movieBanners.subscribe(
      (banners: IMovieBanner[]) => {
        this.movieBanners = banners;
      }
    );
  }

  ngOnDestroy(): void {
    this.fetchMovieBannerSubscription?.unsubscribe;
    this.movieBannersSubscription?.unsubscribe;
  }
}

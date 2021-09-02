import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/components/modal/modal.service';
import { IMovieBanner } from 'src/app/models/movies';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor(
    private movieApiSv: MovieApiService,
    private movieSv: MoviesService,
    private modalSv: ModalService
  ) {}

  movieBanners: IMovieBanner[] = [];
  isLoading: boolean = true;

  fetchMovieBanner = () => {
    this.isLoading = true;
    this.movieApiSv.fetchMovieBanner().subscribe(
      (res) => {
        console.log(res);
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
    this.movieSv.movieBanners.subscribe((banners: IMovieBanner[]) => {
      this.movieBanners = banners;
      console.log(this.movieBanners);
    });
  }
}

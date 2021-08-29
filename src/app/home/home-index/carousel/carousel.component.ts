import { Component, OnInit } from '@angular/core';
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
    private movieSv: MoviesService
  ) {}

  movieBanners: IMovieBanner[] = [];
  isActive: boolean = true;
  fetchMovieBanner = () => {
    this.movieApiSv.fetchMovieBanner().subscribe(
      (res) => {
        console.log(res);
        this.movieSv.setMovieBanners(res.content);
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

  ngOnInit(): void {
    this.fetchMovieBanner();
    this.movieSv.movieBanners.subscribe((banners: IMovieBanner[]) => {
      this.movieBanners = banners;
      console.log(this.movieBanners);
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './home-index/carousel/carousel.component';
import { MoviesComponent } from './home-index/movies/movies.component';
import { TheatersShowTimesComponent } from './home-index/theaters-show-times/theaters-show-times.component';

@NgModule({
  declarations: [HomeIndexComponent, CarouselComponent, MoviesComponent, TheatersShowTimesComponent],
  imports: [CommonModule, RouterModule],
  // exports: [HomeIndexComponent],
})
export class HomeModule {}

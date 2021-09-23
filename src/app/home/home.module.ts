import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './home-index/carousel/carousel.component';
import { MoviesComponent } from './home-index/movies/movies.component';
import { TheatersShowTimesComponent } from './home-index/theaters-show-times/theaters-show-times.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { MovieItemComponent } from './home-index/movies/movie-item/movie-item.component';
import { MovieShowingComponent } from './home-index/movies/movie-showing/movie-showing.component';
import { MovieComingComponent } from './home-index/movies/movie-coming/movie-coming.component';
import { SafePipeModule } from 'safe-pipe';

@NgModule({
  declarations: [HomeIndexComponent, CarouselComponent, MoviesComponent, TheatersShowTimesComponent, MovieItemComponent, MovieShowingComponent, MovieComingComponent],
  imports: [CommonModule, RouterModule, MatIconModule, MatTabsModule, SlickCarouselModule, MatListModule, MatSelectModule, FormsModule, ComponentsModule,SafePipeModule],
  // exports: [HomeIndexComponent],
})
export class HomeModule {}

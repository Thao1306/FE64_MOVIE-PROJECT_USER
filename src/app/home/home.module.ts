import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeIndexComponent],
  imports: [CommonModule, RouterModule],
  // exports: [HomeIndexComponent],
})
export class HomeModule {}

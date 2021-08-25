import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from '../home/home-index/home-index.component';
import { DetailIndexComponent } from '../detail/detail-index/detail-index.component';

const routes: Routes = [
  { path: '', component: HomeIndexComponent},
  { path: 'detail/:id', component: DetailIndexComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class RoutingModule {}

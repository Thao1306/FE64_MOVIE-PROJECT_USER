import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from '../home/home-index/home-index.component';
import { DetailIndexComponent } from '../detail/detail-index/detail-index.component';
import { SignUpComponent } from './../auth/sign-up/sign-up.component';
import { SignInComponent } from './../auth/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomeIndexComponent },
  { path: 'detail/:id', component: DetailIndexComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class RoutingModule { }

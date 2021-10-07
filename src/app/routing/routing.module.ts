import { DatVeIndexComponent } from '../booking/datve-index/datve-index.component';
import { DanhSachGheComponent } from './../booking/danh-sach-ghe/danh-sach-ghe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from '../home/home-index/home-index.component';
import { DetailIndexComponent } from '../detail/detail-index/detail-index.component';
import { SignUpComponent } from './../auth/sign-up/sign-up.component';
import { SignInComponent } from './../auth/sign-in/sign-in.component';
import { UpdateUserComponent } from './../auth/update-user/update-user.component';
import { AuthGuard } from '../guards/auth.guard';
import { PrivateGuard } from '../guards/private.guard';

const routes: Routes = [
  { path: '', component: HomeIndexComponent },
  { path: 'detail/:id', component: DetailIndexComponent },
  { path: 'datve/:id', component: DatVeIndexComponent },
  { path: 'signin', component: SignInComponent, canActivate: [AuthGuard]},
  { path: 'signup', component: SignUpComponent, canActivate: [AuthGuard] },
  { path: 'thongtintaikhoan', component: UpdateUserComponent, canActivate: [PrivateGuard] },
  { path: '**', redirectTo: '' },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class RoutingModule { }

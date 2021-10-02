import { DatVeIndexComponent } from '../booking/datve-index/datve-index.component';
import { DanhSachGheComponent } from './../booking/danh-sach-ghe/danh-sach-ghe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from '../home/home-index/home-index.component';
import { DetailIndexComponent } from '../detail/detail-index/detail-index.component';
import { SignUpComponent } from './../auth/sign-up/sign-up.component';
import { SignInComponent } from './../auth/sign-in/sign-in.component';
import { UpdateUserComponent } from './../auth/update-user/update-user.component';

const routes: Routes = [
  { path: '', component: HomeIndexComponent },
  { path: 'detail/:id', component: DetailIndexComponent },
  { path: 'datve/:id', component: DatVeIndexComponent },
  { path: 'danhsachghe', component: DanhSachGheComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'thongtintaikhoan', component: UpdateUserComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class RoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { FormsModule } from '@angular/forms';
import { GheComponent } from './ghe/ghe.component';
import { DatVeIndexComponent } from './datve-index/datve-index.component';


@NgModule({
  declarations: [
    DanhSachGheComponent,
    GheComponent,
    DatVeIndexComponent
  ],
  exports: [
    DanhSachGheComponent,
    GheComponent,
    DatVeIndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]

})
export class BookingModule { }

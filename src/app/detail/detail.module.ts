import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailIndexComponent } from './detail-index/detail-index.component';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from '../components/components.module';
import { SafePipeModule } from 'safe-pipe';

@NgModule({
  declarations: [DetailIndexComponent],
  imports: [CommonModule, MatIconModule, ComponentsModule, SafePipeModule],
})
export class DetailModule {}

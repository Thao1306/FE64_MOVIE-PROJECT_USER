import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    MatCardModule
  ]
})
export class AuthModule { }

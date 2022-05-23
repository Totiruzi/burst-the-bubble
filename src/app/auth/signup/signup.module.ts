import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { AuthModule } from '../auth.module';



@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AuthModule
  ],
  exports: [
    SignupComponent 
  ]
})
export class SignupModule { }

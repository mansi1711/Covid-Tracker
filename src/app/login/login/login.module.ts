import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AdminLoginComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }

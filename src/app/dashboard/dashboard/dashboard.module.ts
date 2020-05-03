import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedMaterialModule } from '../../shared/shared-material.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule
    ],
  exports: [
    DashboardComponent
    ]
})
export class DashboardModule { }

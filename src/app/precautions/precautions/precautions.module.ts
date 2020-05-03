import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecautionsComponent } from './precautions.component';
import { SharedMaterialModule } from '../../shared/shared-material.module';


@NgModule({
  declarations: [PrecautionsComponent],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [
    PrecautionsComponent]
})
export class PrecautionsModule { }

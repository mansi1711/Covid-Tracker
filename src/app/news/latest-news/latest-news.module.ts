import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsComponent } from './latest-news.component';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { RouterModule } from '@angular/router';
import { AddNewsComponent } from '../../news/addnews/add-news/add-news.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NewsInMemoryDataService } from 'src/app/core/services/news-in-memory-data.service';



@NgModule({
  declarations: [LatestNewsComponent, AddNewsComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(NewsInMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true})
    ],
  exports: [
    LatestNewsComponent,
    AddNewsComponent,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class LatestNewsModule { }

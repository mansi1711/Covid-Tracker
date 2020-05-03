import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared/shared-material.module'
import { AuthGuard } from './guards/auth.guard';
import { DistrictWiseComponent } from './dashboard/districtwise/district-wise/district-wise.component';


@NgModule({
  declarations: [
    AppComponent,
    DistrictWiseComponent,
    
    ],
  imports: [
    RouterModule,
    AppRoutingModule,
    SharedMaterialModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

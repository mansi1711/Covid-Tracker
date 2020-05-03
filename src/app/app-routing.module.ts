import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LatestNewsModule } from './news/latest-news/latest-news.module';
import { LatestNewsComponent } from './news/latest-news/latest-news.component';
import { PrecautionsModule } from './precautions/precautions/precautions.module'
import { PrecautionsComponent } from './precautions/precautions/precautions.component';
import { LoginModule } from './login/login/login.module';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { PageNotFoundComponent } from './pagenotfound/page-not-found/page-not-found.component';
import { DistrictWiseComponent } from './dashboard/districtwise/district-wise/district-wise.component';
import { AddNewsComponent } from './news/addnews/add-news/add-news.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '' , redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'news', component: LatestNewsComponent },
  { path: 'addnews', component: AddNewsComponent, canActivate: [AuthGuard]},
  { path: 'precautions', component: PrecautionsComponent },
  { path: 'login', component: AdminLoginComponent },
  { path: 'districtwise/:state', component: DistrictWiseComponent },
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardModule,
    LatestNewsModule,
    PrecautionsModule,
    LoginModule
],
  exports: [
    RouterModule,
    DashboardModule,
    LatestNewsModule,
    PrecautionsModule,
    LoginModule
  ]
})
export class AppRoutingModule { }

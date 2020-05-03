import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit{

  title: String = "Covid Tracker"

  private _isLoggedinSubscription: Subscription;

  // variable to check user is logged in or not.
  isLoggedIn = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: Router, private loginService: LoginService) {
    this._isLoggedinSubscription = this.loginService.isLoggedin$.subscribe(isLogged => {
      this.isLoggedIn = isLogged;   
  })  
  }

  ngOnInit() {
    if(localStorage.getItem('TOKEN') !== null){
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }
  }

  ngOnDestroy(): void {
    this._isLoggedinSubscription.unsubscribe();
  }

  /**
   * Method that logout the user from the portal.
   */
  logout() {
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('TOKEN'); 
    this.loginService.isLoggedin = false;  
    this.route.navigate(['/dashboard']);
  }

}

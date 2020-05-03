import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { IUser } from '../../shared/interfaces/IUser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  // variable of login form.
  loginForm: FormGroup;
  /**
   *
   * @param fb : FormBuilder
   * @param route : Router
   * @param loginService : LoginService
   */
  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService,
              private toastrService: ToastrService ) {

    /**
     * Login form initialized with default values.
     */
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  /**
   * This method returns the error messages.
   */
  getErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? 'You must enter a value' :
        this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
            '';
  }

  /** Clears the local storage initially */
  ngOnInit() {
    if (localStorage.getItem('TOKEN')) {
      localStorage.clear();
    }
  }

  /**
   * Login the user and redirect to dashboard when valid.
   * @param myform : IUser
   */
  login(myform: IUser) {
    if (this.loginService.validateUser(myform)) {
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('isLoggedIn','true');
      this.loginService.isLoggedin = true;
      this.route.navigate(['/dashboard']);
      this.toastrService.success('Logged in successfully!', 'User Management Portal');
    } else {
      this.toastrService.warning('Please enter valid credentials!', 'User Management Portal');
    }

  }

}

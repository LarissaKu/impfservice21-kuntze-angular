import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { User } from '../shared/user';
import { VacServiceService } from '../shared/vac-service.service';
import { Vacplace } from '../shared/vacplace';

interface Response {
  access_token: string;
}

@Component({
  selector: 'im-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  user:User;
  error: '';
  vacplace:Vacplace;

  constructor(private fb:FormBuilder, private router:Router, private authService:AuthenticationService,
    private vr: VacServiceService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });    
    /*if(this.authService.isLoggedIn()) {
      this.vr.getUser(this.authService.getCurrentUserId()).subscribe(v => this.user = v);
    }
    this.vr.getAllPlaces().subscribe(res => this.vacplace = res);*/
  }

  login(){
    const val = this.loginForm.value;
    if(val.username && val.password){
      this.authService.login(val.username, val.password).subscribe(
        (res)=>{
          this.authService.setLocalStorage((res as Response).access_token);
          this.router.navigateByUrl("/");
      },
        error => {
          this.error = error;
        });
    }
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
  }

  checkUser() {
    if (this.user != undefined) {
      return true;
    } else {
      return false;
    }
  }

}
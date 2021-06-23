import { Component, VERSION } from '@angular/core';
import { AuthenticationService } from './shared/authentication.service';
import { Vacdate } from './shared/vacdate';



@Component({
  selector: 'im-root',
  templateUrl: './app.component.html',
  /*`
  <im-vacdate-list *ngIf="listOn"
(showDetailsEvent)="showDetails($event)"></im-vacdate-list>
<im-vacdate-details *ngIf="detailsOn" [vacdate]="vacdate"
(showListEvent)="showList()"></im-vacdate-details>
  `,*/
  styles: []
})

export class AppComponent  {
  listOn = true;
 detailsOn = false;
 
 constructor(private authService:AuthenticationService){}

 /*vacdate:Vacdate;

  showList() {
  this.listOn = true;
  this.detailsOn = false;
  }
  showDetails(vacdate: Vacdate) {
  this.vacdate = vacdate;
  this.listOn = false;
  this.detailsOn = true;
  }*/

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  getLoginLabel(){
    if(this.isLoggedIn()){
      return "Logout";
    } else {
      return "Login";
    }
  }
}

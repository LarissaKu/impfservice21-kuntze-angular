import { Component, VERSION } from '@angular/core';
import { Vacdate } from '../shared/vacdate';



@Component({
  selector: 'im-root',
  template: `
  <im-vacdate-list *ngIf="listOn"
(showDetailsEvent)="showDetails($event)"></im-vacdate-list>
<im-vacdate-details *ngIf="detailsOn" [vacdate]="vacdate"
(showListEvent)="showList()"></im-vacdate-details>
  `,
  styles: []
})

export class AppComponent  {
  listOn = true;
 detailsOn = false;

 vacdate:Vacdate;

 showList() {
  this.listOn = true;
  this.detailsOn = false;
  }
  showDetails(vacdate: Vacdate) {
  this.vacdate = vacdate;
  this.listOn = false;
  this.detailsOn = true;
  }
}

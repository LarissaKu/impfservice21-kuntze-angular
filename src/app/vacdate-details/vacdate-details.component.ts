import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { VacServiceService } from '../shared/vac-service.service';
import { User, Vacdate } from '../shared/vacdate';
//import {User} from '../shared/user';
import { Vacplace } from '../shared/vacplace';
import { VacdateFactory } from '../shared/vacdate-factory';

@Component({
  selector: 'im-vacdate-details',
  templateUrl: './vacdate-details.component.html',
  styles: []
})
export class VacdateDetailsComponent implements OnInit {
  vacplace: Vacplace[];
  vacdate: Vacdate = VacdateFactory.empty();
  vacdate1: Vacdate;
  user: User;
  //@Input() vacdate: Vacdate;
  //@Output() showListEvent= new EventEmitter<any>();

  constructor(
    private im: VacServiceService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.im.getSingle(params['id']).subscribe(vac => {
      this.vacdate = vac;
      console.log(this.vacdate.vacplace_id);
    });

    this.im.getSinglePlace(this.vacdate.vacplace_id).subscribe(vac => {
      //console.log(vac);
    });

    if (this.authService.isLoggedIn()) {
      this.im
        .getUser(this.authService.getCurrentUserId())
        .subscribe(vac => (this.user = vac));
    }

    /*
    if(this.authService.isLoggedIn()){
      this.im.getUser(this.authService.getCurrentUserId()).subscribe((vac) => {this.user = new User(vac.id, vac.gender, vac.firstname, vac.lastname, vac.birthday, vac.svnr, vac.email, vac.phone, vac.fedstate, vac.zip, vac.city, vac.adress, vac.vaccinated, vac.registered, 'z', vac.admin, vac.vacdate_id)});

      console.log("ID: " + this.user.id);
    }
*/
    /*
    if(this.authService.isLoggedIn()){
      this.user = new User(5, 0, "FN", "", new Date, "sn", "m", "p", "s", "z", "c", "a", true, true, 'p', false, []);
      console.log("ID: " + this.user.id);
    }
    */

    /*
    if(this.authService.isLoggedIn()){
      this.user = new User(5, 0, "FN", "", new Date, "sn", "m", "p", "s", "z", "c", "a", true, true, 'p', false, []);
      this.im.getUser(this.authService.getCurrentUserId()).subscribe((vac) => {this.user = new User(vac.id, vac.gender, vac.firstname, vac.lastname, vac.birthday, vac.svnr, vac.email, vac.phone, vac.fedstate, vac.zip, vac.city, vac.adress, vac.vaccinated, vac.registered, 'z', vac.admin, vac.vacdate_id)});

      console.log("ID: " + this.user.id);
    }
    */
  }

  removeVacdate() {
    if (confirm('Impftermin wirklich löschen?')) {
      this.im
        .remove(this.vacdate.id)
        .subscribe(res =>
          this.router.navigate(['../'], { relativeTo: this.route })
        );
    }
  }

  checkUser() {
    if (this.user != undefined) {
      return true;
    } else {
      return false;
    }
  }

  registerUser(user) {
    this.vacdate.users.push(user);
    this.im.registerToVacdate(this.vacdate.id, user.id).subscribe(res => {
      alert('Sie wurden zum Impftermin angemeldet.');
      this.router.navigate(['../../home'], {
        relativeTo: this.route
      });
    });
  }

  editToVaccinated(user) {
    user.vaccinated = true;
    this.im
      .editToVaccinated(user)
      .subscribe(res =>
        this.router.navigate(['../../vacdate', this.vacdate.id], {
          relativeTo: this.route
        })
      );
  }

  checkFreePlaces() {
    if(this.vacdate.users.length < this.vacdate.maxpersons) {
      return true;
    } else {
      return false;
    }
  }
}

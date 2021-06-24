import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { VacServiceService } from '../shared/vac-service.service';
import { User, Vacdate } from '../shared/vacdate';
import { VacdateFactory } from '../shared/vacdate-factory';

@Component({
  selector: 'a.im-vacdate-list-item',
  templateUrl: './vacdate-list-item.component.html',
  styles: []
})
export class VacdateListItemComponent implements OnInit {
  @Input() vacdate: Vacdate;

  vacdate2: Vacdate = VacdateFactory.empty();
  user: User;

  constructor(
    private route: ActivatedRoute, 
    public authService:AuthenticationService, 
    public im:VacServiceService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.im
        .getUser(this.authService.getCurrentUserId())
        .subscribe(vac => (this.user = vac));
    }
  }

  checkFreePlaces() {
    if(this.vacdate.users.length < this.vacdate.maxpersons) {
      return true;
    } else {
      return false;
    }
  }

}
import { Component, OnInit } from '@angular/core';
import relativeLinkResolution from '@angular/core/schematics/migrations/relative-link-resolution';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { Vacdate } from '../shared/vacdate';

@Component({
  selector: 'im-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute, public authService:AuthenticationService) {}

  /*vacdateSelected(vacdate: Vacdate) {
    this.router.navigate(['../vacdates', vacdate.id], {
      relativeTo: this.route
    });
  }*/
}

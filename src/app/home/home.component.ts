import { Component, OnInit } from '@angular/core';
import relativeLinkResolution from '@angular/core/schematics/migrations/relative-link-resolution';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacdate } from '../shared/vacdate';

@Component({
  selector: 'im-home',
  templateUrl: './home.component.html',
  /*template: `
    <div class="ui container">
      <h1>Home</h1>
      <p>Das ist der Kuntze Impfservice.</p>
      <a routerLink="../vacdates" class="ui red button">
        Impftermine ansehen
        <i class="right arrow icon"></i>
      </a>
    </div>
  `,*/
  styles: []
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  vacdateSelected(vacdate: Vacdate) {
    this.router.navigate(['../vacdates', vacdate.id], {
      relativeTo: this.route
    });
  }
}

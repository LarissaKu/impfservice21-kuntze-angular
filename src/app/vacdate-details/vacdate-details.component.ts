import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { VacServiceService } from '../shared/vac-service.service';
import { Vacdate} from '../shared/vacdate';
import { Vacplace} from '../shared/vacplace';
import { VacdateFactory } from '../shared/vacdate-factory';

@Component({
  selector: 'im-vacdate-details',
  templateUrl: './vacdate-details.component.html',
  styles: []
})
export class VacdateDetailsComponent implements OnInit {
  vacplace: Vacplace[];
  vacdate: Vacdate = VacdateFactory.empty();
  //@Input() vacdate: Vacdate;
  //@Output() showListEvent= new EventEmitter<any>();

  constructor(private im: VacServiceService, private router: Router, private route: ActivatedRoute, public authService:AuthenticationService) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.im.getSingle(params['id']).subscribe(vac => this.vacdate = vac);

    this.im.getAllPlaces().subscribe(vac => this.vacplace = vac);
  }

  /*showVacdateList() {
    this.showListEvent.emit();
  }*/

  removeVacdate() {
    if (confirm('Impftermin wirklich löschen?')) {
    this.im.remove(this.vacdate.id)
    .subscribe(res => this.router.navigate(['../'], { relativeTo:
    this.route }));
    }
  }

}
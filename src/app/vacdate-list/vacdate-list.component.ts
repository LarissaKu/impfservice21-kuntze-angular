import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Timestamp } from 'rxjs/internal/Rx';
import { timestamp } from 'rxjs/operators';
import { AuthenticationService } from '../shared/authentication.service';
import { VacServiceService } from '../shared/vac-service.service';
import { User, Vacdate } from '../shared/vacdate';
import { VacdateFactory } from '../shared/vacdate-factory';


@Component({
  selector: 'im-vacdate-list',
  templateUrl: './vacdate-list.component.html',
  styles: []
})
export class VacdateListComponent implements OnInit {
  vacdates: Vacdate[];
  vacdate: Vacdate = VacdateFactory.empty();
  @Output() showDetailsEvent = new EventEmitter<Vacdate>();

  constructor(private im: VacServiceService, public authService: AuthenticationService){ }

  ngOnInit() {
    this.im.getAll().subscribe(res => this.vacdates = res);
    //this.vacdates = this.im.getAll();
  }

  showDetails(vacdate: Vacdate) {
    this.showDetailsEvent.emit(vacdate);
    }

   

}

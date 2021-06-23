import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Timestamp } from 'rxjs/internal/Rx';
import { timestamp } from 'rxjs/operators';
import { VacServiceService } from '../shared/vac-service.service';
import { Vacdate } from '../shared/vacdate';


@Component({
  selector: 'im-vacdate-list',
  templateUrl: './vacdate-list.component.html',
  styles: []
})
export class VacdateListComponent implements OnInit {
  vacdates: Vacdate[];
  @Output() showDetailsEvent = new EventEmitter<Vacdate>();

  constructor(private im: VacServiceService){ }

  ngOnInit() {
    this.im.getAll().subscribe(res => this.vacdates = res);
    //this.vacdates = this.im.getAll();
    console.log(this.vacdates);
  }

  showDetails(vacdate: Vacdate) {
    this.showDetailsEvent.emit(vacdate);
    }

}

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
//[x: string]: any;
  vacdates: Vacdate[];
  @Output() showDetailsEvent = new EventEmitter<Vacdate>();

  constructor(private im: VacServiceService){ }

  ngOnInit() {
    this.vacdates = this.im.getAll();
  }

  showDetails(vacdate: Vacdate) {
    this.showDetailsEvent.emit(vacdate);
    }

}

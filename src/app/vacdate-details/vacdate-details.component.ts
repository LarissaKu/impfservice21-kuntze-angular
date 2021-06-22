import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacServiceService } from '../shared/vac-service.service';
import { Vacdate } from '../shared/vacdate';

@Component({
  selector: 'im-vacdate-details',
  templateUrl: './vacdate-details.component.html',
  styles: []
})
export class VacdateDetailsComponent implements OnInit {
 // vacdate: Vacdate;
  @Input() vacdate: Vacdate;
  @Output() showListEvent= new EventEmitter<any>();

  constructor(private im: VacServiceService, private route: ActivatedRoute) {}

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.vacdate = this.im.getSingle(params['id']);
  }

  showVacdateList() {
    this.showListEvent.emit();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vacdate } from '../shared/vacdate';

@Component({
  selector: 'im-vacdate-details',
  templateUrl: './vacdate-details.component.html',
  styles: []
})
export class VacdateDetailsComponent implements OnInit {
  @Input() vacdate: Vacdate;
  @Output() showListEvent= new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  showVacdateList() {
    this.showListEvent.emit();
    }

}
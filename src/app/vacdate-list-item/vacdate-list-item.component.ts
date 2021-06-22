import { Component, OnInit, Input } from '@angular/core';
import { Vacdate } from '../shared/vacdate';

@Component({
  selector: 'a.im-vacdate-list-item',
  templateUrl: './vacdate-list-item.component.html',
  styles: []
})
export class VacdateListItemComponent implements OnInit {
  @Input() vacdate: Vacdate;
  constructor() { }

  ngOnInit() {
  }

}
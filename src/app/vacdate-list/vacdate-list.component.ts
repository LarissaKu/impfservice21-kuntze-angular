import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Timestamp } from 'rxjs/internal/Rx';
import { timestamp } from 'rxjs/operators';
import { User, Vacdate, Vacplace } from '../../shared/vacdate';

@Component({
  selector: 'im-vacdate-list',
  templateUrl: './vacdate-list.component.html',
  styles: []
})
export class VacdateListComponent implements OnInit {
//[x: string]: any;
  vacdates: Vacdate[];
  @Output() showDetailsEvent = new EventEmitter<Vacdate>();

  ngOnInit() {
    this.vacdates = [
      new Vacdate(1, new Date(2021,8,21), "12:15", "12:30", 15, "Moderna", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3"), 
      [],
      ),
      new Vacdate(2, new Date(2021,8,21), "12:40", "12:50", 2, "Pfizer", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3"), 
      [],
      )]
  }

  showDetails(vacdate: Vacdate) {
    this.showDetailsEvent.emit(vacdate);
    }

}

/*new User(2, 1, "Max", "Zimmer", new Date('1958-03-18'), "7932 180358", "max@zimmer.at", "+43 660 4336862", 1, "$2y$10$G6Do2mjEFEy08p9KBZz/IeMjOs0UapX870aXP3kOuhbfgAzOt5bye", false, new Vacdate(1,new Date(2021,08,21), "12:15", "12:30", 15, "Moderna", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3")) */

/* new User (3, 0, "Alex", "Schmidt", new Date(2001,07,13), "5411 130701", "alex@schmidt.at", "+43 664 3156843", 2, "$2y$10$sPyK0q/AvC/rjdyGMEDrjexWTaJaMRbt7mUx/UhG6S0gaeHbmj81K", false, new Vacdate(1,new Date(2021,08,21), "12:15", "12:30", 15, "Moderna", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3")*/
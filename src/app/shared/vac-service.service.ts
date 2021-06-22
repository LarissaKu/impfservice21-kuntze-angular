import { Injectable } from '@angular/core';
import { Vacdate } from './vacdate';
import { Vacplace } from './vacplace';
@Injectable()
export class VacServiceService {
vacdates: Vacdate[];
constructor() {
  this.vacdates = [
    new Vacdate("1", new Date(2021,8,21), "12:15", "12:30", 15, "Moderna", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3"), 
    [],
    ),
    new Vacdate("2", new Date(2021,8,21), "12:40", "12:50", 2, "Pfizer", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3"), 
    [],
    )];

    
/*new User(2, 1, "Max", "Zimmer", new Date('1958-03-18'), "7932 180358", "max@zimmer.at", "+43 660 4336862", 1, "$2y$10$G6Do2mjEFEy08p9KBZz/IeMjOs0UapX870aXP3kOuhbfgAzOt5bye", false, new Vacdate(1,new Date(2021,08,21), "12:15", "12:30", 15, "Moderna", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3")) */

/* new User (3, 0, "Alex", "Schmidt", new Date(2001,07,13), "5411 130701", "alex@schmidt.at", "+43 664 3156843", 2, "$2y$10$sPyK0q/AvC/rjdyGMEDrjexWTaJaMRbt7mUx/UhG6S0gaeHbmj81K", false, new Vacdate(1,new Date(2021,08,21), "12:15", "12:30", 15, "Moderna", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3")*/
}
getAll(){
return this.vacdates;
}

getSingle(id :
  string) :
  Vacdate {
  return this.vacdates.find(vacdate => vacdate.id === id);
  }
}
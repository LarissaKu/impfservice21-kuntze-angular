import { Vacdate } from './vacdate';

export class VacdateFactory {
  static empty(): Vacdate {
    return new Vacdate(
      '',
      new Date(),
      '',
      '',
      0,
      '',
      { id: 0, fedstate: '', zip: '', city: '', adress: '' },
      []
    );
  }

  /*new User(2, 1, "Max", "Zimmer", new Date('1958-03-18'), "7932 180358", "max@zimmer.at", "+43 660 4336862", 1, "$2y$10$G6Do2mjEFEy08p9KBZz/IeMjOs0UapX870aXP3kOuhbfgAzOt5bye", false, new Vacdate(1,new Date(2021,08,21), "12:15", "12:30", 15, "Moderna", new Vacplace (2, "Burgenland", "4530", "Eisenstadt", "Winterstrasse 3"))
}*/
  static fromObject(rawVacdate: any): Vacdate {
    return new Vacdate(
      rawVacdate.id,
      rawVacdate.vacday,
      rawVacdate.start,
      rawVacdate.end,
      rawVacdate.maxpersons,
      rawVacdate.vaccine,
      rawVacdate.vacplace_id,
      rawVacdate.users
    );
  }
}

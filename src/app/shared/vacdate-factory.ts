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
      0,
      { id: 0, fedstate: '', zip: '', city: '', adress: '' },
      0,
      []
    );
  }

  static fromObject(rawVacdate: any): Vacdate {
    return new Vacdate(
      rawVacdate.id,
      rawVacdate.vacday,
      rawVacdate.start,
      rawVacdate.end,
      rawVacdate.maxpersons,
      rawVacdate.vaccine,
      rawVacdate.vacplace_id,
      rawVacdate.vacplace,
      rawVacdate.user_id,
      rawVacdate.users
    );
  }
}

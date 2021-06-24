import { Vacdate } from "./vacdate";

export class User {

  constructor(
    public id: number,
    public gender: number,
    public firstname: string,
    public lastname: string,
    public birthday: Date,
    public svnr: string,
    public email: string,
    public phone: string,
    public fedstate: string,
    public zip: string,
    public city: string,
    public adress: string,
    public vaccinated: boolean,
    public registered: boolean,
    private password: string,
    public admin: boolean,
    public vacdate_id: Vacdate[]) {
  }
}
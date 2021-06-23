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
    public dose: number,
    private password: string,
    public admin: boolean,
    public vacdate_id?: Vacdate[]) {
  }
}
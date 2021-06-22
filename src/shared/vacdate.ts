import { Vacplace } from "./vacplace";
export { Vacplace } from "./vacplace";
import { User } from "./user";
import { Time } from "@angular/common";
export { User } from "./user";

export class Vacdate {

  constructor(
    public id: number,
    public vacday: Date,
    public start: Time,
    public end: Time,
    public maxpersons: number,
    public vaccine: string,
    public vacplace_id: Vacplace,
    public users: User[]
  ) {
  }
}
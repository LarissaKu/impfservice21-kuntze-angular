import { Vacplace } from "./vacplace";
export { Vacplace } from "./vacplace";
import { User } from "./user";
export { User } from "./user";

export class Vacdate {

  constructor(
    public id: string,
    public vacday: Date,
    public start: string,
    public end: string,
    public maxpersons: number,
    public vaccine: string,
    public vacplace: Vacplace,
    public users?: User[]
  ) {
  }
}
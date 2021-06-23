import { formatDate } from "@angular/common";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { VacServiceService } from "./vac-service.service";

export class VacValidators {

  static vaccNrExists(vr : VacServiceService) {
    return function(control: FormControl): Observable<{[error: string]: any}> {
      return vr.check(control.value)
        .pipe(map(exists => !exists ? null : {vaccNrExists: {valid: false }}));
    }
  }

  static dateValidator(control: FormControl): {[error: string]: any} {
    const today = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    return control.value > today ? null : {dateValidator: {valid: false}};
  }

}
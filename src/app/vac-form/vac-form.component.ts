import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isArray } from 'rxjs/internal/util/isArray';
import { VacServiceService } from '../shared/vac-service.service';
import { VacValidators } from '../shared/vac-validators';
import { Vacdate, Vacplace } from '../shared/vacdate';
import { VacdateFactory } from '../shared/vacdate-factory';
import { VacFormErrorMessages } from './vac-form-error-messages';

@Component({
  selector: 'im-vac-form',
  templateUrl: './vac-form.component.html',
  styles: []
})
export class VacFormComponent implements OnInit {
  vacForm: FormGroup;
  vacdate = VacdateFactory.empty();
  vacplaces: Vacplace[];
  errors: { [key: string]: string } = {};
  isUpdatingVac = false;
  showSummary = false;

  constructor(
    private fb: FormBuilder,
    private vr: VacServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const vacId = this.route.snapshot.params['id'];

    if (vacId) {
      this.isUpdatingVac = true;
      this.vr.getSingle(vacId).subscribe(vacdate => {
        this.vacdate = vacdate;
        this.initVacdate();
      });
    }
    this.initVacdate();
  }

  initVacdate() {
    this.vacForm = this.fb.group({
      id: this.vacdate.id,
      vacday: [
        this.vacdate.vacday,
        [Validators.required, VacValidators.dateValidator]
      ],
      start: [
        this.vacdate.start,
        [
          Validators.required,
          Validators.pattern('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')
        ]
      ],
      end: [
        this.vacdate.end,
        [
          Validators.required,
          Validators.pattern('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$')
        ]
      ],
      maxpersons: [
        this.vacdate.maxpersons,
        [Validators.required, Validators.max(35), Validators.min(2)]
      ],
      vaccine: [this.vacdate.vaccine, Validators.required],
      vacplace: [this.vacdate.vacplace_id, Validators.required]
    });
    this.vacForm.statusChanges.subscribe(() => this.updateErrorMessages());

    this.vr.getAllPlaces().subscribe(res => this.vacplaces = res);
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of VacFormErrorMessages) {
      const control = this.vacForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm() {
    console.log(this.vacForm.value);

    //filters null values
    const updatedVacdate: Vacdate = VacdateFactory.fromObject(
      this.vacForm.value
    );
    //console.log(updatedVacdate);
    console.log("bääääh"+this.vacForm.value.vacplace);

    updatedVacdate.vacplace_id = this.vacForm.value.vacplace;

    if(Array.isArray(this.vacdate.user_id)){
      updatedVacdate.user_id = this.vacdate.user_id;
    }
    else{
      updatedVacdate.users = [];
    }

    if (this.isUpdatingVac) {
      this.vr.update(updatedVacdate).subscribe(res => {
        this.router.navigate(['../../vacdates', updatedVacdate.id], {
          relativeTo: this.route
        });
      });
    } else {
      this.vr.create(updatedVacdate).subscribe(res => {
        this.vacdate = VacdateFactory.empty();
        this.vacForm.reset(VacdateFactory.empty());
        this.router.navigate(['../vacdates'], { relativeTo: this.route });
      });
    }
  }

  nextStep() {
    this.showSummary = true;
  }

  backToPage() {
    if(this.isUpdatingVac) {
      this.router.navigateByUrl("/vacdates/"+this.vacdate.id);
    } else {
      this.router.navigateByUrl("/vacdates");
    }
  }

  back() {
    this.vacdate.vacplace_id = this.vacForm.value.vacplace;
    this.showSummary = false;
  }
}
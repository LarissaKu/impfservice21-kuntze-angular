import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  //showSummary = false;

  constructor(private fb: FormBuilder,
    private vr: VacServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const vacId = this.route.snapshot.params["id"];

    if(vacId){
      this.isUpdatingVac = true;
      this.vr.getSingle(vacId).subscribe(vacdate =>{
        this.vacdate = vacdate;
        this.initVacdate();
      });
    }
    this.initVacdate();
    }

    initVacdate(){
      this.vacForm = this.fb.group({
        id: this.vacdate.id,
        vacday: [this.vacdate.vacday, [Validators.required, VacValidators.dateValidator]],
        start: [this.vacdate.start, [Validators.required,
          Validators.pattern("^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")]],
        end: [this.vacdate.end, [Validators.required,
          Validators.pattern("^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")]],
          maxpersons: [this.vacdate.maxpersons, [Validators.required, Validators.max(25), Validators.min(2)]],
          vaccine: [this.vacdate.vaccine, Validators.required],
          vacplace: [this.vacdate.vacplace.id, Validators.required]
      });
      this.vacForm.statusChanges.subscribe(() => this.updateErrorMessages());
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
      const updatedVacdate: Vacdate = VacdateFactory.fromObject(this.vacForm.value);
      console.log(updatedVacdate);
  
      vacdate.vacplace = this.vacForm.value.vaccination_place;
      vacdate.users = this.vacdate.users;
  
      if (this.isUpdatingVac) {
        this.im.update(vacdate).subscribe(res => {
          this.router.navigate(["../../vacdates", vacdates.id], {
            relativeTo: this.route
          }); //}, (error)=>{ sinnvolle Fehlermeldung}
        });
      } else {
        this.im.create(vacdate).subscribe(res => {
          this.vacdate = VacdateFactory.empty();
          this.vacForm.reset(VacdateFactory.empty());
          this.router.navigate(["../vacdates"], { relativeTo: this.route });
        });
      }
    }

}

/*

  backToPage() {
    if(this.isUpdatingVaccination) {
      this.router.navigateByUrl("/vaccinations/"+this.vaccination.vaccination_nr);
    } else {
      this.router.navigateByUrl("/vaccinations");
    }
  }

  updateErrorMessages() {

    this.errors = {};

    for (const message of VaccinationFormErrorMessages) {
      const control = this.vaccinationForm.get(message.forControl);

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

  back() {
    this.vaccination.vaccination_place.vaccination_place_nr = this.vaccinationForm.value.vaccination_place;
    this.showSummary = false;
  }

  submitVaccination() {
    const vaccination: Vaccination = VaccinationFactory.fromObject(this.vaccinationForm.value);
    vaccination.vaccination_place = this.vaccinationForm.value.vaccination_place;
    vaccination.vaccination_users = this.vaccination.vaccination_users;

    if (this.isUpdatingVaccination) {
      this.vr.update(vaccination).subscribe(res => {
        this.router.navigate(["../../vaccinations", vaccination.vaccination_nr], {
          relativeTo: this.route
        });
      });

    } else {

      this.vr.create(vaccination).subscribe(res => {
        this.vaccination = VaccinationFactory.empty();
        this.vaccinationForm.reset(VaccinationFactory.empty());
        this.router.navigate(["../vaccinations"], { relativeTo: this.route
        });
      });
    }
  }

}*/
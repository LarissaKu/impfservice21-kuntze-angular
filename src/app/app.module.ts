import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VacdateListComponent } from './vacdate-list/vacdate-list.component';
import { VacdateListItemComponent } from './vacdate-list-item/vacdate-list-item.component';
import { VacdateDetailsComponent } from './vacdate-details/vacdate-details.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { VacServiceService } from './shared/vac-service.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { VacFormComponentComponent } from './vac-form-component/vac-form-component.component';
import { VacFormComponent } from './vac-form/vac-form.component';
import { VacRegistrationService } from './shared/vac-registration.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, VacdateListComponent, VacdateListItemComponent, VacdateDetailsComponent, HomeComponent, LoginComponent, VacFormComponentComponent, VacFormComponent ],
  providers: [VacServiceService, VacRegistrationService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

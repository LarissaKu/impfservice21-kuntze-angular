import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VacdateListComponent } from './vacdate-list/vacdate-list.component';
import { VacdateListItemComponent } from './vacdate-list-item/vacdate-list-item.component';
import { VacdateDetailsComponent } from './vacdate-details/vacdate-details.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { VacServiceService } from './shared/vac-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { VacFormComponent } from './vac-form/vac-form.component';
import { VacRegistrationService } from './shared/vac-registration.service';
import { AuthenticationService } from './shared/authentication.service';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { JwtInterceptorService } from './shared/jwt.interceptor.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, VacdateListComponent, VacdateListItemComponent, VacdateDetailsComponent, HomeComponent, LoginComponent, VacFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [VacServiceService, VacRegistrationService, AuthenticationService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
    multi: true
  },
  /*{
    provide: LOCALE_ID, useValue:'de'
  }*/
  ]
})
export class AppModule { }

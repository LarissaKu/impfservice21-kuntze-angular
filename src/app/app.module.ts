import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VacdateListComponent } from './vacdate-list/vacdate-list.component';
import { VacdateListItemComponent } from './vacdate-list-item/vacdate-list-item.component';
import { VacdateDetailsComponent } from './vacdate-details/vacdate-details.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { VacServiceService } from './shared/vac-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, VacdateListComponent, VacdateListItemComponent, VacdateDetailsComponent, HomeComponent ],
  providers: [VacServiceService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

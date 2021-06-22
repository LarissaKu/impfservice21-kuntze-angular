import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VacdateListComponent } from './vacdate-list/vacdate-list.component';
import { VacdateListItemComponent } from './vacdate-list-item/vacdate-list-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, VacdateListComponent, VacdateListItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

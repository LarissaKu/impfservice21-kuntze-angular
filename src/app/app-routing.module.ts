import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { VacFormComponent } from "./vac-form/vac-form.component";
import { VacdateDetailsComponent } from "./vacdate-details/vacdate-details.component";
import { VacdateListComponent } from "./vacdate-list/vacdate-list.component";

const routes:Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  //{path: 'vacdate/registration/:id', component: },
  {path:'vacdates', component: VacdateListComponent},
  {path:'vacdates/:id', component: VacdateDetailsComponent},
  {path:'admin', component:VacFormComponent},
  {path:'admin/:id', component:VacFormComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VacdateDetailsComponent } from "./vacdate-details/vacdate-details.component";
import { VacdateListComponent } from "./vacdate-list/vacdate-list.component";

const routes:Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'vacdates', component: VacdateListComponent},
  {path:'vacdates/:id', component: VacdateDetailsComponent},
  /*{path:'admin', component:BookFormComponent, canActivate:[CanNavigateToAdminGuard]},
  {path:'admin/:isbn', component:BookFormComponent},
  {path:'login', component:LoginComponent}*/
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 // providers: [CanNavigateToAdminGuard]
})
export class AppRoutingModule { }
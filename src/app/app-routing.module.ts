import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Components/about/about.component';
import { TeamComponent } from './Components/team/team.component';
import { DoctorDashboardComponent } from './Components/doctor-dashboard/doctor-dashboard.component';
const routes: Routes = [
  {
    path:'about', component: AboutComponent
  },
  {
    path : 'team', component : TeamComponent
  },
  {
    path : '', component : DoctorDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

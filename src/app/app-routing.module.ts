import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Components/about/about.component';
import { TeamComponent } from './Components/team/team.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DoctorDashboardComponent } from './Components/doctor-dashboard/doctor-dashboard.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'team', component: TeamComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  {
    path: 'dashboard', component: DoctorDashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

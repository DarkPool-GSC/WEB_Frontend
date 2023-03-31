import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientPrescriptionFormComponent } from './Components/pacient-prescription-form/pacient-prescription-form.component';
import { HomeComponent } from './Components/home/home.component';
import { TeamComponent } from './Components/team/team.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/login/register/register.component';
import { DoctorDashboardComponent } from './Components/doctor-dashboard/doctor-dashboard.component';
import { VerifyEmailComponent } from './Components/login/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './Components/login/forget-password/forget-password.component';
import { ReceptionistDashboardComponent } from './Components/receptionist-dashboard/receptionist-dashboard.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'team', component: TeamComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path : 'doctor-dashboard', component :DoctorDashboardComponent
  },
  { path : 'reception-dashboard', component: ReceptionistDashboardComponent},
  {path : 'patient-prescription', component: PacientPrescriptionFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

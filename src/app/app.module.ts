import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './shared/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { DoctorDashboardComponent } from './Components/doctor-dashboard/doctor-dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { TeamComponent } from './Components/team/team.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/login/register/register.component';
import { VerifyEmailComponent } from './Components/login/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './Components/login/forget-password/forget-password.component';
import { PatientFormComponent } from './Components/patient-form/patient-form.component';
import { PatientDetailsComponent } from './Components/patient-details/patient-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReceptionistDashboardComponent } from './Components/receptionist-dashboard/receptionist-dashboard.component';
import { TopWidgetsComponent } from './Components/receptionist-dashboard/top-widgets/top-widgets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './Components/receptionist-dashboard/list/list.component';
import { DoctorFormComponent } from './Components/doctor-form/doctor-form.component';
import { PacientPrescriptionFormComponent } from './Components/pacient-prescription-form/pacient-prescription-form.component';
import { DoctorWidgetComponent } from './Components/receptionist-dashboard/doctor-widget/doctor-widget.component';
import { DoctorModalComponent } from './Components/doctor-modal/doctor-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    HeaderComponent,
    HomeComponent,
    TeamComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ForgetPasswordComponent,
    PatientFormComponent,
    PatientDetailsComponent,
    ReceptionistDashboardComponent,
    TopWidgetsComponent,
    ListComponent,
    DoctorFormComponent,
    PacientPrescriptionFormComponent,
    DoctorWidgetComponent,
    DoctorModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

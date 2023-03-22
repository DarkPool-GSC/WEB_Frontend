import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './shared/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { DoctorDashboardComponent } from './Components/doctor-dashboard/doctor-dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './Components/about/about.component';
import { TeamComponent } from './Components/team/team.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { SearchComponent } from './Components/search/search.component';
import { PatientFormComponent } from './Components/patient-form/patient-form.component';
import { PatientDetailsComponent } from './Components/patient-details/patient-details.component';
import { ParentComponent } from './Components/parent/parent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    HeaderComponent,
    AboutComponent,
    TeamComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ForgetPasswordComponent,
    SearchComponent,
    PatientFormComponent,
    PatientDetailsComponent,
    ParentComponent,
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
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

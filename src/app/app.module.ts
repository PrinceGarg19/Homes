import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignuoComponent } from './signuo/signuo.component';


import { HttpClientModule } from '@angular/common/http';


import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { DashComponent } from './dash/dash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DepartmentComponent } from './department/department.component';
import { MoreComponent } from './more/more.component';
import { PatientComponent } from './patient/patient.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignuoComponent,
    NavbarComponent,
    InfoComponent,
    DashComponent,
    AppointmentComponent,
    DoctorsComponent,
    DepartmentComponent,
    MoreComponent,
    PatientComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

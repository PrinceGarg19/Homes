import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignuoComponent } from './signuo/signuo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MoreComponent } from './more/more.component';
import { DashComponent } from './dash/dash.component';
import { DepartmentComponent } from './department/department.component';
import { paymentModel } from './payment/payment.model';
import { PaymentComponent } from './payment/payment.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  // {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignuoComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'doctor',component:DoctorsComponent},
  {path:'more',component:MoreComponent},
  {path:'patient',component:PatientComponent},
  {path:'dashboard',component:DashComponent},
  {path:'department',component:DepartmentComponent},
  {path:'payment',component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

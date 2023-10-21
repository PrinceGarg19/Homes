import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../shared/apiservice.service';
import { PatientModel } from './appointment.model';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  formvalue : FormGroup;
  showAdd:boolean
  showUpdate:boolean
  id:number;
  employeeModelobj : PatientModel = new PatientModel();
  employeeData : any;

  constructor(private formbuilder: FormBuilder, private api:ApiService){
  }

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      name : [''],
      email : [''],
      date:[''],
      visit_time:[''],
      mobile:[''],
      doctor:[''],
      condition:['']
    })
    this.getAllEmployee();
  }


  PostEmployeeDetails(){
    this.employeeModelobj.name = this.formvalue.value.name;
    this.employeeModelobj.email = this.formvalue.value.email;
    this.employeeModelobj.date = this.formvalue.value.date;
    this.employeeModelobj.visit_time = this.formvalue.value.visit_time;
    this.employeeModelobj.mobile = this.formvalue.value.mobile;
    this.employeeModelobj.doctor = this.formvalue.value.doctor;
    this.employeeModelobj.condition = this.formvalue.value.condition;

    this.api.postEmployee(this.employeeModelobj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Added Successfully")
      let ref = document.getElementById('cancel')
      this.formvalue.reset();
      ref?.click()
      this.getAllEmployee();
    },
    err=>{
      alert("something went wrong");
    }
    )
  }

  clickAddEmployee(){
    this.formvalue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


  deleteEmployee(row){
    this.api.deleteEmplyee(row.id)
    .subscribe(res=>{
      this.getAllEmployee();
    })
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }

  onEdit(row){
    this.showAdd = false;
    this.showUpdate = true;
    this.id = row.id;
    this.formvalue.controls['name'].setValue(row.name);
    this.formvalue.controls['email'].setValue(row.email);
    this.formvalue.controls['date'].setValue(row.date);
    this.formvalue.controls['visit_time'].setValue(row.visit_time);
    this.formvalue.controls['mobile'].setValue(row.mobile);
    this.formvalue.controls['doctor'].setValue(row.doctor);
    this.formvalue.controls['condition'].setValue(row.condition);
  }

  updateEmployeeDetails(){
    this.employeeModelobj.name = this.formvalue.value.name;
    this.employeeModelobj.email = this.formvalue.value.email;
    this.employeeModelobj.date = this.formvalue.value.date;
    this.employeeModelobj.visit_time = this.formvalue.value.visit_time;
    this.employeeModelobj.mobile = this.formvalue.value.mobile;
    this.employeeModelobj.doctor = this.formvalue.value.doctor;
    this.employeeModelobj.condition = this.formvalue.value.condition;

    this.api.updateEmployee(this.employeeModelobj,this.id)
    .subscribe(res=>{
      alert('Update Successfully')
      let ref = document.getElementById('cancel')
      ref?.click()
      // this.employeeModelobj.id = null;
      this.getAllEmployee();
    })
  }


}

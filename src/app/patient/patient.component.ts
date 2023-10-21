import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../patient/api.service';
import { PatientModel } from './patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

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
      id : [''],
      age:[''],
      address:[''],
      mobile:[''],
      date:[''],
      status:['']
    })
    this.getAllEmployee();
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
    this.formvalue.controls['id'].setValue(row.id);
    this.formvalue.controls['age'].setValue(row.age);
    this.formvalue.controls['address'].setValue(row.address);
    this.formvalue.controls['mobile'].setValue(row.mobile);
    this.formvalue.controls['date'].setValue(row.date);
    this.formvalue.controls['status'].setValue(row.status);
  }

  updateEmployeeDetails(){
    this.employeeModelobj.name = this.formvalue.value.name;
    this.employeeModelobj.id = this.formvalue.value.id;
    this.employeeModelobj.age = this.formvalue.value.age;
    this.employeeModelobj.address = this.formvalue.value.address;
    this.employeeModelobj.mobile = this.formvalue.value.mobile;
    this.employeeModelobj.date = this.formvalue.value.date;
    this.employeeModelobj.status = this.formvalue.value.status;

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


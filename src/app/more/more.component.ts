import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { doctorModel } from './more.model';
import { ApiService } from './more.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  formvalue : FormGroup;
  showAdd:boolean
  showUpdate:boolean
  id:number;
  employeeModelobj : doctorModel = new doctorModel();
  employeeData : any;

  constructor(private formbuilder: FormBuilder, private api:ApiService){
  }

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      name : [''],
      age : [''],
      role:[''],
      gender:[''],
     address:[''],
    })
    this.getAllEmployee();
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
    this.formvalue.controls['age'].setValue(row.age);
    this.formvalue.controls['role'].setValue(row.role);
    this.formvalue.controls['gender'].setValue(row.gender);
    this.formvalue.controls['address'].setValue(row.address);
  }

  updateEmployeeDetails(){
    this.employeeModelobj.name = this.formvalue.value.name;
    this.employeeModelobj.age = this.formvalue.value.age;
    this.employeeModelobj.role = this.formvalue.value.role;
    this.employeeModelobj.gender = this.formvalue.value.gender;
    this.employeeModelobj.address = this.formvalue.value.address;

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
